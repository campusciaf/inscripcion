import { Component, OnInit, ViewChild } from '@angular/core';
import { ConectarApiService } from 'src/app/servicios/conectar-api.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';


declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})


export class NoticiasComponent implements OnInit {

  safeSrc: SafeResourceUrl | undefined;

  
  public calendario="assets/image/calendario-regular.webp";
  public vistas="assets/image/vistas.webp";

  public prev="assets/image/prev.webp";
  public next="assets/image/next.webp";
  public btn_next="assets/image/btn-next.webp";

  listarNoticias:any;
  listarNoticias2:any;
  detalleNoticia:any;
  listarNoticiasPrincipal:any;

  tipobusquedad:any;

  slideConfig = {
    "slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, "nextArrow":false,"prevArrow":false, "autoplay": true,
    responsive: [
      {
        breakpoint: 1048,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  
  };
  
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  

  
  prevImg(){
    this.slickModal.slickPrev();
  }
  nextImg(){
    this.slickModal.slickNext();
  }


  titulo:any;
  total:any;
  valor:any;


  videoYoutube(valor:any,titulo:any){

    this.titulo=titulo;
    this.total=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + valor); 
  }
  




  constructor(

    private conectarApiService:ConectarApiService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private  _route:ActivatedRoute
    
  ) { 

  

    
    
  }
  closeResult = '';

	open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}


  animarnoticia(id:any){
    $(".accion"+id).css("height","80px");
  }
  noanimarnoticia(id:any){
    $(".accion"+id).css("height","0px");
  }
 
  id:any= this._route.snapshot.paramMap.getAll('id');

  ngOnInit(): void {
    
    this.conectarApiService.obtenerNoticiasPrincipal("codefc").subscribe(respuesta=>{
      this.listarNoticiasPrincipal=respuesta;

    });

   
    
    this.conectarApiService.obtenerNoticiaId(this.id).subscribe(respuesta=>{
      this.detalleNoticia=respuesta;
      this.tipobusquedad=this.id[0];
    }); 

    this.conectarApiService.obtenerNoticias().subscribe(respuesta=>{
      this.listarNoticias=respuesta;
      this.tipobusquedad=this.id[0];


    });

    
  }

  traerNoticia(){
 
   
    this.conectarApiService.obtenerNoticiaId(this.id).subscribe(respuesta=>{
      this.detalleNoticia=respuesta;

      this.tipobusquedad=this.id[0];
  
    }); 
   

  }

 

}


