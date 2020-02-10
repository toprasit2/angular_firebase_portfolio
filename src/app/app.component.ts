import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  picture =
    "https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.0-9/82276382_2704271882986481_6627920194620620800_o.jpg?_nc_cat=107&_nc_eui2=AeH7AcAMd_4fOzmp9yVwsZgq6MdVjJyJGPh7qsFN40N7KUAf7LqF7Ibt827T7y05vmJ5ig8Fw5cUMOu24OYvAshsPutXeyXiazgAUMM9uBMW7w&_nc_ohc=neC7S0S_WrIAX9q3Y3D&_nc_ht=scontent.fhdy3-1.fna&oh=3cd7042d34393918bdb46ac7e4df90cf&oe=5EC4318D";
  name = "Thanaphon Toprasit";
  role = "Developer";
  description = `Full Stack JavaScript developer, work
  with both the front and back end of a
  website and mobile application. Familiar
  with HTML, CSS, JavaScript, Grails and
  many more.
  `;
  contracts = [
    { title: "Facebook", description: "Thanaphon Toprasit" },
    { title: "Line", description: "gengkup" },
    { title: "Instragram", description: "gengnikub" }
  ];

  abouts = [
    {
      image:
        "https://i.pinimg.com/originals/4f/50/32/4f5032f0a9340c157f5f66d74fd59153.jpg",
      title: "Technology"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/514jheg8f8L.png",
      title: "Music"
    },
    {
      image:
        "https://www.konix-interactive.com/wp-content/uploads/2019/09/3328170273763_show.png",
      title: "Gaming"
    }
  ];

  educations = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/28/Prince_of_Songkla_University_Emblem.png",
      title: "Prince of Songkla University",
      description: "Faculty of Computer Engineering 2015-2019"
    },
    {
      image:
        "https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.0-9/69172838_2247808925342125_222243327544655872_o.jpg?_nc_cat=103&_nc_eui2=AeED1ZUbo0Jiep6v3yhESsI-YPlLiGc1uFbYh80HVsoEG7_UJAXthIogMChRgv3h6kWrGtQaolmsJ5POWES4UEaHdT7iy6KPoaYG-HGZ3jeXBg&_nc_ohc=HxneBhbd9NkAX8MVScu&_nc_ht=scontent.fhdy3-1.fna&oh=7982ae6631384e8e1b1c7fde56da7260&oe=5EC4D61B",
      title: "Mahavajiravudh Songkhla",
      description: "2010-2015"
    }
  ];
  experiences = [
    {
      image:
        "https://www.bonmek.com/wp-content/uploads/2019/07/cropped-bonmekTransparent-1.png",
      title: "Bonmek Co.,Ltd. Hat Yai",
      description: "Software Developer ( present )"
    },
    {
      image:
        "data:image/png;base64,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",
      title: "Foobar system Co. Ltd., Hat Yai",
      description: "Software Engineer Trainee"
    }
  ];

  activities = [
    {year: "2019", title: "Certification of CompTIA Cloud Essentials"},
    {year: "2018", title: "Robot IoT Sy stem Development and Platform (APRIS) Robot Challenge 2018 (1st Prize)"},
    {year: "2018", title: "Digital Innovation submit 2018 : BigData"},
    {year: "2018", title: "Southern IoT Tech Startup"},
    {year: "2018 - 2019", title: "R202 Laboratory (member)"},
    {year: "2017 - 2018", title: "Pupasoft Laboratory (member)"},
    {year: "2017", title: "Tech Startup Club (member)"},
  ];
}
