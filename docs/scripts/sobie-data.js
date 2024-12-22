const sobieDates = {
  sobieYear: "2025",
  sobieStartDate: new Date("Apr 9 2025 00:00:00 CST"), 
  sobieEndDate: new Date("Apr 11 2025 00:00:00 CST"),
  getSobieStart(){return `${weekday[this.sobieStartDate.getDay()]},  ${month[this.sobieStartDate.getMonth()]} ${this.sobieStartDate.getDate()}, ${this.sobieStartDate.getFullYear()}`},
  getSobieEnd(){return `${weekday[this.sobieEndDate.getDay()]},  ${month[this.sobieEndDate.getMonth()]} ${this.sobieEndDate.getDate()}, ${this.sobieEndDate.getFullYear()}`},
  sobieCallForPapersDate: {
    ready: false,
    estimate: "TBA mid December",
    actual: ""},
  sobieRegistrationDate: {
    ready: false, 
    estimate: "TBA mid March",
  },
  sobieRate : {
    ready: false, 
    estimate: "TBA mid January", 
    code: "", 
    link: ""
  }
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export { sobieDates }; 
