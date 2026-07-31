import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit, OnDestroy{
  @ViewChild('canvasContainer',{static:true})
  container!:ElementRef<HTMLDivElement>;

  private scene!:THREE.Scene;
  private camera!:THREE.PerspectiveCamera;
  private renderer!:THREE.WebGLRenderer;
  private plane!:THREE.Mesh;

  private animationId!:number;

  private sections = ["start","home","about","policy","contact"];
  private currentSection = 0;

  private rippleTimeout:any;

  constructor(private zone:NgZone){}

  /* ===================================================== */

  ngAfterViewInit(){
    this.zone.runOutsideAngular(()=>{
      this.initThree();
      this.animate();
    });
  }

  /* ===================================================== */

  private initThree(){

    /* ---------- SCENE ---------- */

    this.scene = new THREE.Scene();

    this.camera =
      new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
      );

    this.camera.position.z = 5;

    this.renderer =
      new THREE.WebGLRenderer({antialias:true});

    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    this.container.nativeElement.appendChild(
      this.renderer.domElement
    );

    /* ---------- LIGHT ---------- */

    const hemi = new THREE.HemisphereLight(0xffffff,0x444444,1.2);

    this.scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff,1);

    dir.position.set(5,10,7);

    this.scene.add(dir);

    /* ---------- TEXTURE ---------- */

    const texture = new THREE.TextureLoader().load('assets/img/cielo-di-tampa-10-20-16-108-ok-1.jpg');  //aerial-view-container-cargo-ship-sea-2.jpeg

    texture.wrapS = texture.wrapT =
      THREE.RepeatWrapping;

    /* ---------- SHADER ---------- */

    const material = new THREE.ShaderMaterial({

      uniforms:{
        uTexture:{value:texture},
        uMouse:{value:new THREE.Vector2(0.5,0.5)},
        uTime:{value:0},
        uRippleStrength:{value:0}
      },

      vertexShader:`
        varying vec2 vUv;
        void main(){
          vUv=uv;
          gl_Position=
          projectionMatrix*
          modelViewMatrix*
          vec4(position,1.0);
        }
      `,

      fragmentShader:`
        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform float uTime;
        uniform float uRippleStrength;

        varying vec2 vUv;

        void main(){

          float dist=distance(vUv,uMouse);

          float wave=
            sin(dist*30.0-uTime*3.0);

          float ripple=
            wave*
            exp(-8.0*dist)*
            uRippleStrength;

          vec2 direction=
            normalize(vUv-uMouse);

          vec2 distortedUv=
            vUv+direction*ripple*0.02;

          gl_FragColor=
            texture2D(uTexture,distortedUv);
        }
      `
    });

    const geometry =
      new THREE.PlaneGeometry(20,12);

    this.plane =
      new THREE.Mesh(geometry,material);

    this.scene.add(this.plane);

    document.getElementById(this.sections[0])?.classList.add('active');

    /* ---------- EVENTS ---------- */

    window.addEventListener('resize',this.onResize);

    document
      .getElementById('overlay')
      ?.addEventListener('mousemove',this.onMouseMove);

    window.addEventListener('wheel',this.onScroll);
    window.addEventListener('touchstart', this.onTouchStart, { passive: true });
    window.addEventListener('touchmove', this.onTouchMove, { passive: true });
    window.addEventListener('touchend', this.onTouchEnd, { passive: true });
  }

  /* ===================================================== */

  private onMouseMove = (event:MouseEvent)=>{

  };

  /* ===================================================== */

  private scrollAccumulator = 0;
  private threshold = 540;

  private touchStartY = 0;
  private touchEndY = 0;
  private readonly swipeThreshold = 50; // px

  private onTouchStart = (event: TouchEvent) => {
    this.touchStartY = event.touches[0].clientY;
  };

  private onTouchMove = (event: TouchEvent) => {
    this.touchEndY = event.touches[0].clientY;
  };

  private onTouchEnd = () => {

    const delta = this.touchStartY - this.touchEndY;

    if (Math.abs(delta) < this.swipeThreshold) return;

    document
      .getElementById(this.sections[this.currentSection])
      ?.classList.remove('active');

    if (delta > 0)
      this.currentSection =
        Math.min(this.currentSection + 1, this.sections.length - 1);
    else
      this.currentSection =
        Math.max(this.currentSection - 1, 0);

    document
      .getElementById(this.sections[this.currentSection])
      ?.classList.add('active');
  };


  private onScroll = (event:WheelEvent)=>{

    this.scrollAccumulator += event.deltaY;

    if(Math.abs(this.scrollAccumulator)
        < this.threshold) return;

    document
      .getElementById(this.sections[this.currentSection])
      ?.classList.remove('active');

    if(this.scrollAccumulator>0)
      this.currentSection=
        Math.min(this.currentSection+1, this.sections.length-1);
    else
      this.currentSection=
        Math.max(this.currentSection-1,0);

    document
      .getElementById(this.sections[this.currentSection])
      ?.classList.add('active');

    this.scrollAccumulator=0;
  };

  /* ===================================================== */

  private animate = ()=>{

    this.animationId =
      requestAnimationFrame(this.animate);

    const mat =
      this.plane.material as THREE.ShaderMaterial;

    mat.uniforms['uTime'].value += 0.016;

    this.renderer.render(this.scene,this.camera);
  };

  /* ===================================================== */

  private onResize = ()=>{

    this.camera.aspect =
      window.innerWidth/window.innerHeight;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );
  };

  /* ===================================================== */

  ngOnDestroy(){

    cancelAnimationFrame(this.animationId);

    window.removeEventListener('resize',this.onResize);
    window.removeEventListener('wheel',this.onScroll);
    window.removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onTouchEnd);
  }


}
