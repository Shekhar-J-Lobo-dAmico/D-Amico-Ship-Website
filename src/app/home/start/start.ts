import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { StartPgServices } from '../../services/start-pg-services';

@Component({
  selector: 'app-start',
  imports: [CommonModule],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start implements AfterViewInit{

  constructor(private zone:NgZone, private router:Router, private startService:StartPgServices){}

  @ViewChild('canvasContainer', { static: true })
  container!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  private particles!: THREE.Points;
  private geo!: THREE.BufferGeometry;

  private particleCount = 50000;

  private original: { angle:number; r:number }[] = [];
  private velocity: THREE.Vector2[] = [];

  private mouse = new THREE.Vector2();
  private raycaster = new THREE.Raycaster();
  private plane = new THREE.Plane(new THREE.Vector3(0,0,1),0);

  private imagePlane!: THREE.Mesh;
  private clock = new THREE.Timer();

  private animationId!: number;

  /* ---------------------------------- */
  /* INIT                               */
  /* ---------------------------------- */

  // Can be a local path or external URL
  currentBg = '';//'assets/img/gp.jpg'; 

  ngOnInit() {
    this.currentBg = this.getBg();
  }
 ngAfterViewInit(){
    this.zone.runOutsideAngular(()=>{
        this.initThree();
        this.animate();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.onResize);
  }

  /* ---------------------------------- */
  /* THREE SETUP                        */
  /* ---------------------------------- */

  private initThree() {

    const width = this.container.nativeElement.clientWidth;
    const height = this.container.nativeElement.clientHeight;

    /* Scene */
    this.scene = new THREE.Scene();

    /* Camera */
    this.camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      0.1,
      1000
    );
    this.camera.position.set(0,0,8);

    /* Renderer */
    this.renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
    this.renderer.setSize(width,height);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.container.nativeElement.appendChild(
      this.renderer.domElement
    );

    /* Resize */
    window.addEventListener('resize', this.onResize);

    /* Mouse */
    window.addEventListener('mousemove', (e)=>{
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    this.createParticles();
    this.createLogo();
  }

  /* ---------------------------------- */
  /* PARTICLES                          */
  /* ---------------------------------- */
  private lastTime = performance.now();
  private elapsedTime = 0;
  private angularSpeed: number[] = [];
  
  private createParticles() {

    const radius =
      Math.min(window.innerWidth, window.innerHeight) * 0.03;

    const positions = new Float32Array(this.particleCount * 3);

    for(let i=0;i<this.particleCount;i++){

      const angle = (i / this.particleCount) * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;

      const x = Math.cos(angle)*r;
      const y = Math.sin(angle)*r;

      positions[i*3] = x;
      positions[i*3+1] = y;
      positions[i*3+2] = 0;

      this.original.push({angle,r});
      this.velocity.push(new THREE.Vector2());

      this.angularSpeed.push(
        0.5 + Math.random() * 0.2
      );

    }

    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions,3)
    );

    const mat = new THREE.PointsMaterial({
      size:0.03,
      color:0xC0C0C0
    });

    this.particles = new THREE.Points(this.geo,mat);

    this.scene.add(this.particles);
  }

  /* ---------------------------------- */
  /* LOGO IMAGE                         */
  /* ---------------------------------- */
  private createLogo(){

    const textureLoader = new THREE.TextureLoader();

    const texture =
      textureLoader.load('assets/img/StartLogo1-Photoroom.png');

    texture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.PlaneGeometry(3,3);

    const material = new THREE.MeshBasicMaterial({
      map:texture,
      transparent:true
    });

    this.imagePlane = new THREE.Mesh(geometry,material);
    
    this.scene.add(this.imagePlane);
  }

  /* ---------------------------------- */
  /* RESIZE                             */
  /* ---------------------------------- */

  private onResize = () => {

    const width = this.container.nativeElement.clientWidth;
    const height = this.container.nativeElement.clientHeight;

    this.camera.aspect = width/height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width,height);
  };

  /* ---------------------------------- */
  /* ANIMATION LOOP                     */
  /* ---------------------------------- */
   
  private animate = () => {

    this.animationId = requestAnimationFrame(this.animate);

    this.imagePlane.rotation.z -= 0.005;

    //this.clock.getElapsed();
    const now = performance.now();

    const delta =
      (now - this.lastTime) * 0.0005; // seconds

    this.lastTime = now;

    this.elapsedTime += delta;
    // const time = (performance.now() - startTime) * 0.01
    const pos = this.geo.attributes['position'].array as Float32Array;

    this.raycaster.setFromCamera(this.mouse,this.camera);

    const hit = new THREE.Vector3();
    this.raycaster.ray.intersectPlane(this.plane,hit);
    // console.log("time",delta);

    for(let i=0;i<this.particleCount;i++){

      const i3 = i*3;

      this.original[i].angle += this.angularSpeed[i] * delta;

      // const orbitAngle = this.original[i].angle + time * 0.2;

      const ox = Math.sin(this.original[i].angle)*this.original[i].r;

      const oy =  Math.cos(this.original[i].angle)*this.original[i].r;

      /* SPRING TOWARD ORBIT */
      // this.velocity[i].x += (ox - pos[i3]) * 4 * delta;
      // this.velocity[i].y += (oy - pos[i3+1]) * 4 * delta;
      
      const dx = pos[i3] - hit.x;
      const dy = pos[i3+1] - hit.y;

      const dist = Math.sqrt(dx*dx + dy*dy);
      const influence = 0.6;

      if(dist < influence){

        const force = (1 - dist/influence) * 100 * delta;//*0.9;

        this.velocity[i].x += dx*force;
        this.velocity[i].y += dy*force;
      }

      /* SPRING → ORBIT */
      this.velocity[i].x += (ox - pos[i3]) * 0.08;
      this.velocity[i].y += (oy - pos[i3+1]) * 0.08;

      /* DAMPING */
      this.velocity[i].multiplyScalar(0.90);

      /* APPLY */
      pos[i3] += this.velocity[i].x;
      pos[i3+1] += this.velocity[i].y;
    }

    this.geo.attributes['position'].needsUpdate = true;

    this.renderer.render(this.scene,this.camera);
  };

  enterHome(){
    this.router.navigate(['/home']);
  }

  getBg():string{
    try{
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

      const image= this.startService.bgList.filter((item:any) => {
        const start = this.parseDate(item.startdate);
        const end = this.parseDate(item.lastdate);
        
        return today >= start && today <= end;
      });
      
      // const image=this.startService.bgList.filter((item:any) => item.date === todayFormatted);
      return image[0].bgImage;
    }catch(err){
      console.log(err);
      return "";
    }
  }

  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }
  
}
