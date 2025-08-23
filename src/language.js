const language = {
  pl: {
    skills: "Umiejętności i Specjalizacje",
    skill1: "Prawo jazdy kategorii B",
    skill2: "Microsoft Office (Word, Excel, PowerPoint)",
    skill3: "Doświadczenie w pracy zespołowej i pod presją czasu",
    skill4: "Umiejętności zarządzania zmianą produkcyjną",
    add: " Dodatkowo podstawy :",
    languages: "Języki",
    lang1: "Polski - język ojczysty",
    lang2: "Angielski - zaawansowany",
    experience: "DOŚWIADCZENIE ZAWODOWE",
    job1: "09.2021 - obecnie | Leadhand - Vitalograph, Ennis, Co. Clare, Irlandia",
    job2: "08.2018 – 09.2021 | Manager – McDonald’s, Ennis, Co. Clare, Irlandia",
    jobDescription1: "Zarządzanie zespołem produkcyjnym podczas zmiany.",
    jobDescription2:
      "Nadzór nad jakością produkcji filtrów BVF (zgodnie z normą ISO 13485).",
    jobDescription3: "Obsługa i optymalizacja wtryskarek Fanuc.",
    jobDescription4:
      "Zapewnienie ciągłości i efektywności procesów produkcyjnych.",
    jobDescription5: "Zarządzanie operacyjne restauracją i zespołem.",
    jobDescription6:
      "Kontrola jakości obsługi oraz zarządzanie zapasami i kosztami.",
    jobDescription7:
      "Koordynacja i rozwój usług dostawczych, co zwiększyło sprzedaż.",
    jobDescription8: "Praca w dynamicznym środowisku i logistyka dostaw.",
    courses: "KURSY I CERTYFIKATY",
    course1:
      "06.2025 (w trakcie) Programowanie stron internetowych i aplikacji mobilnych Organizator: TEB Edukacja",
    course2: "Front-end i back-end nowoczesnych aplikacji",
    education: "WYKSZTAŁCENIE",
    edu1: "Zespół Szkół Zawodowych im. mjra Henryka Sucharskiego w Złotoryi Wykształcenie średnie",
  },
  eng: {
    skills: "Skills and Specializations",
    skill1: "Driving license category B",
    skill2: "Microsoft Office (Word, Excel, PowerPoint)",
    skill3: "Experience in teamwork and under time pressure",
    skill4: "Production change management skills",
    add: " Additionally basics of :",
    languages: "Languages",
    lang1: "Polish - native",
    lang2: "English - advanced",
    experience: "WORK EXPERIENCE",
    job1: "09.2021 - present | Leadhand - Vitalograph, Ennis, Co. Clare, Ireland",
    job2: "08.2018 – 09.2021 | Manager – McDonald’s, Ennis, Co. Clare, Ireland",
    jobDescription1: "Managing the production team during the shift.",
    jobDescription2:
      "Supervision of BVF filter production quality (according to ISO 13485 standard).",
    jobDescription3:
      "Operation and optimization of Fanuc injection molding machines.",
    jobDescription4:
      "Ensuring continuity and efficiency of production processes.",
    jobDescription5: "Operational management of the restaurant and team.",
    jobDescription6:
      "Quality control of service and management of inventory and costs.",
    jobDescription7:
      "Coordination and development of delivery services, which increased sales.",
    jobDescription8:
      "Working in a dynamic environment and logistics of deliveries.",
    courses: "COURSES AND CERTIFICATES",
    course1:
      "06.2025 (in progress) Web and mobile application programming Organizer: TEB Edukacja",
    course2: "Front-end and back-end of modern applications",
    education: "EDUCATION",
    edu1: "Vocational School Complex named after Major Henryk Sucharski in Złotoryja Secondary education",
  },
};

const langBtn = document.getElementById("langBtn");

export function changeLanguage(lang){
    langBtn.addEventListener('click', ()=>{
        if(lang === "pl"){
            lang = "eng";
            langBtn.innerHTML = '<img src="./public/assets/poland.png" alt="pl" width="40px" height="30px" style="border-radius: 10px;">';
        } else {
            lang = "pl";
            langBtn.innerHTML = '<img src="./public/assets/united-kingdom.png" alt="eng" width="40px" height="30px" style="border-radius: 10px;">';
        }

        document.querySelectorAll("[data-key]").forEach((el)=>{
            const key = el.getAttribute("data-key");
            if(language[lang][key]){
                el.textContent = language[lang][key];
            }
        });
        
    })

}