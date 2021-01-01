function func() {
    let TMark = document.getElementById("Total").value;
    let OMark = document.getElementById("obtained").value;
    TMark = parseInt(TMark);
    OMark = parseInt(OMark);
   

    let persentage = (OMark / TMark) * 100;
    
    if (persentage >= 80 && persentage <= 100) {
        document.getElementById("Grade").innerHTML = "A+"
    } else if (persentage >= 70 && persentage <= 79) {
        document.getElementById("Grade").innerHTML  = "A"
    } else if(persentage >= 60 && persentage <= 69) {
        document.getElementById("Grade").innerHTML  = "B"
    } else if(persentage >= 50 && persentage <= 59) {
        document.getElementById("Grade").innerHTML  = "C"
    } else{
        document.getElementById("Grade").innerHTML  = "Fail"
    }
    document.getElementById("Per").innerHTML = persentage;
}

