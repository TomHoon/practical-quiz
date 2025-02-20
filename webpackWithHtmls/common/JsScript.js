class JsScript {
    constructor() {

    }

    기존스크립트제거() {
        const src = document.querySelector('#sriptSRC');
        if (src) src.remove();
    }

    스크립트생성() {
        let script = document.createElement('script');
        
        let fileName = location.pathname || 'home';

        script.src = `./webpackWithHtmls/${fileName}.js`;
        script.setAttribute('id', 'scriptSRC');
    
        script.onload = function() {
            document.head.append(script);
        };
    
        script.onerror = function() {
            console.log('error ');
        }
        
        
    }
}

export default JsScript;
