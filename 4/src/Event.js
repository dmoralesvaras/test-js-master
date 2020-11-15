export default class Event{
    // implement your code here...
    InitVideo(revent){
        console.log('At second '+revent.second+': {type: "'+revent.type+'", message: "'+revent.message+'"}');
    }
    ShowLayer(revent){
        console.log('At second '+revent.second+': {type: "'+revent.type+'", message: "'+revent.message+'"}');
    }
    StopVideo(revent){
        console.log('At second '+revent.second+': {type: "'+revent.type+'", message: "'+revent.message+'"}');
    }
    HideLayer(revent){
        console.log('At second '+revent.second+': {type: "'+revent.type+'", message: "'+revent.message+'"}');
    } 
};