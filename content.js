
window.addEventListener ("load", myMain, false);
    var hashDetection = new hashHandler();

    function hashHandler() {
        this.oldHash = window.location.href;
        this.Check;
    
        var that = this;
        var detect = function() {
            if(that.oldHash != window.location.href 
                && window.location.href+'detail/contact-info/' != that.oldHash 
                && window.location.href != that.oldHash+'detail/contact-info/') {
                myMain('');
                that.oldHash = window.location.href;
            }
        };
    
        this.Check = setInterval(function() { detect() }, 300);
    }
    var hashDetection = new hashHandler();


function myMain (evt) {
    
    let i = setInterval(function() {
        let elem = $("button[class^='artdeco-modal__dismiss artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view']")[0]
        if (elem){
            clearInterval(i);
            
            var section =  $("section[class^='pv-contact-info__contact-type ci-email']")[0];
            var email = " - "
            if (section)
                var email = section.getElementsByClassName("pv-contact-info__contact-link link-without-visited-state t-14")[0].textContent;

            elem.click();


            var name = $("li[class^='inline t-24 t-black t-normal break-words']")[0].textContent;
            var city = $("li[class^='t-16 t-black t-normal inline-block']")[0].textContent;
            var dolzh = $("h2[class^='mt1 t-18 t-black t-normal break-words']")[0].textContent;

            // pv-contact-info__contact-link link-without-visited-state t-14
        
            let div = document.createElement('div');
            div.style.cssText = "z-index: 9999; width: 300px;padding: 6px;height: 300px;position: fixed;top: 200px;right: 0px;background: #98d8f4;border-width: 2px;border-style: groove;";
            div.id = "alert1"
        
            div.innerHTML += `<strong>Имя:</strong> ${name}<br/>`;
            div.innerHTML += `<strong>Место:</strong> ${city}<br/>`;
            div.innerHTML += `<strong>Должность:</strong> ${dolzh}<br/>`;
            div.innerHTML += `<strong>Email:</strong> ${email}<br/>`;
        
            let button1 = document.createElement('button');
            button1.type = 'button'
            button1.textContent = 'Копировать'
            button1.style.cssText = 'border-style: outset;'
            button1.onclick = function(){
                navigator.clipboard.writeText(`${name}\n${city}\n${dolzh}\n${email}`);
                div.append('Скопировано!');
            }
            
            div.append(button1);
            
        
            document.body.append(div);

        }
    }, 400);

    $("[data-control-name='contact_see_more']")[0].click();

}
