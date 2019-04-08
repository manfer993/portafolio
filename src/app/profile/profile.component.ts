import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor() { 
    var description="Diseñador gráfico y web freelance desde 2016, momento desde el cual capitalizo mi tiempo aprendiendo sobre nuevas tecnologías y lenguajes de programación.Cuento con sólidos conocimientos en HTML y CSS principalmente, junto con fundamentos básicos e intermedios de <b>JavaScript</b>. <br/><br/>Motivado a crecer profesionalmente, busco formar parte de una organización que me permita explotar mis habilidades y potenciarlas. Adaptado a entornos dinámicos, hábil para ordenar, planificar, comunicar, trabajar colaborativamente y bajo metodologías agiles, y establecer relaciones interpersonales.";
    window.onload = function what(){
      document.getElementById('pPersonalDescription').innerHTML = description;
    }    
  }

  ngOnInit() {
  }

}
