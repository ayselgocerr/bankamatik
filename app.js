let kullaniciAdi = "ali";
let sifre = "123";
let bakiye = 500000;

$(".loginbtn").click(function(){
    let girilenKullaniciAdi = $(".kadi").val();
    let girilenSifre = $(".sifre").val();

    if(girilenKullaniciAdi == kullaniciAdi && girilenSifre == sifre){
        alert("doğrulama tamam hosgeldin " + kullaniciAdi);
        alert("1- PARA ÇEK 2- PARA YATIR 3- KREDİ ÇEK");

        let yapilacakİslem = Number(prompt("Yapmak istediğiniz işlemi numaralandırın"));
        if(yapilacakİslem ==1){
            alert("hesabınızdaki olan bakiye" + bakiye)
            let cekilmekİstenenTutar =Number(prompt("Ne kadar çekmek istersiniz"));

            if(cekilmekİstenenTutar <= bakiye){
                let kalanTutar = bakiye - cekilmekİstenenTutar;
                alert("cekilen tutar : " + cekilmekİstenenTutar + "hesapta kalan bakiye" + kalanTutar);
                
            }
            else if(cekilmekİstenenTutar > bakiye){
                alert("bakiyenizden fazla bir tutar talep ettiniz");
            }
          //tofixed 2 dedik mesela noktadan sonra 2 rakam ornek 120000.00  
            
        }
        if(yapilacakİslem ==2){
            alert("hesabınızda olan bakiye " + bakiye);
            let yatirilmakİstenenTutar = Number(prompt("Ne kadar Para Yatırmak istiyorsunuz"));
            kalanTutar = yatirilmakİstenenTutar + bakiye;
            alert("para yatırıldı hesabınızdaki toplam tutar: "+ kalanTutar);    
        }
        else if(yapilacakİslem ==3){
            alert("hesabınızda olan bakiye " + bakiye);
            let cekilmekİstenenKredi = Number(prompt("ne kadar kredi cekmek istiyorsunuz"));
            let krediOdenecekTutar = cekilmekİstenenKredi * 0.18 + cekilmekİstenenKredi;
            let aylikKrediOdemesi = krediOdenecekTutar / 12;
            alert("faizli ödenecek tutar: " + krediOdenecekTutar + " " + "/12 ay/ ayda ödenecek tutar" + aylikKrediOdemesi.toFixed(2) );
        }
        
    }
    else{
        alert("kullanıcı adı veya sifre hatali");
    }

});