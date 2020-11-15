
var events;
var types;
var evento;

export default class EventManager{

    constructor(ev,ty,evObj){
        events=ev;
        types=ty;
        evento = evObj;
    }

    run() {
        let n = 0;
        let salir=1;
        let id = setInterval(function(){      
            let eventosact = events.filter((array) => array.second == n);
            eventosact.forEach(element => {
                if (types.indexOf(element.type) > -1){
                    eval('evento.'+element.type+'(element)');
                    salir++;
                }
            });
            n++;
            if (salir>=events.length) clearInterval(id);
          },1000);
    }

};