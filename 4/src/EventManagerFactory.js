import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        // implement your code here...
        let evento = new Event();
        return new EventManager(events,types,evento);
    }
};