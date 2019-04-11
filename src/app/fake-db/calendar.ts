import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';
import { Meta } from '@angular/platform-browser';

export class CalendarFakeDb
{

    public static data = [
        {
            id  : 'events',
            data: [
                {
                    start    : new Date,
                    end      : new Date,
                    title    : 'Full Stack - Salle 402 | 9:00 - 12:00',
                    allDay   : true,
                    color    : {
                        primary  : '#F44336',
                        secondary: '#FFCDD2'
                    },
                    resizable: {
                        beforeStart: false,
                        afterEnd   : false
                    },
                    draggable: false,
                    meta     : {
                        location: '402',
                        notes   : 'Intervenant: Vincent Z'
                    }
                },
                {
                    start    : new Date,
                    end      : new Date,
                    title    : 'Full Stack - Salle 402 | 13:00 - 18:00',
                    allDay   : true,
                    color    : {
                        primary  : '#F44336',
                        secondary: '#FFCDD2'
                    },
                    resizable: {
                        beforeStart: false,
                        afterEnd   : false
                    },
                    draggable: false,
                    meta     : {
                        location: '402',
                        notes   : 'Intervenant: Vincent Z'
                    }
                },
                {
                    start    : addDays(new Date(), 4),
                    end      : addDays(new Date(), 4),
                    title    : 'PHP - Salle 421 | 9:00 - 12:00',
                    allDay   : false,
                    color    : {
                        primary  : '#673AB7',
                        secondary: '#D1C4E9'
                    },
                    resizable: {
                        beforeStart: false,
                        afterEnd   : false
                    },
                    draggable: true,
                    meta     : {
                        location: '421',
                        notes   : 'Intervenant: Thierry D'
                    }
                },
                {
                    start    : addDays(new Date(), 4),
                    end      : addDays(new Date(), 4),
                    title    : 'PHP - Salle 421 | 13:00 - 18:00',
                    allDay   : false,
                    color    : {
                        primary  : '#673AB7',
                        secondary: '#D1C4E9'
                    },
                    resizable: {
                        beforeStart: false,
                        afterEnd   : false
                    },
                    draggable: true,
                    meta     : {
                        location: '421',
                        notes   : 'Intervenant: Thierry D'
                    }
                },
                {
                    start    : addDays(new Date(), 5),
                    end      : addDays(new Date(), 5),
                    title    : 'C# - Salle 412 | 9:00 - 12:00',
                    allDay   : false,
                    color    : {
                        primary  : '#0277bd',
                        secondary: '#4fc3f7'
                    },
                    resizable: {
                        beforeStart: false,
                        afterEnd   : false
                    },
                    draggable: false,
                    meta     : {
                        location: '412',
                        notes   : 'Intervenant: Vincent L'
                    }
                },
                {
                    start    : addDays(new Date(), 5),
                    end      : addDays(new Date(), 5),
                    title    : 'C# - Salle 412 | 13:00 - 18:00',
                    allDay   : false,
                    color    : {
                        primary  : '#0277bd',
                        secondary: '#4fc3f7'
                    },
                    resizable: {
                        beforeStart: false,
                        afterEnd   : false
                    },
                    draggable: false,
                    meta     : {
                        location: '412',
                        notes   : 'Intervenant: Vincent L'
                    }
                },
                {
                    start    : addDays(new Date(), 6),
                    end      : addDays(new Date(), 6),
                    title    : 'Swift 4 - 407 | 9:00 - 12:00',
                    allDay   : false,
                    color    : {
                        primary  : '#f57c00',
                        secondary: '#ffb74d'
                    },
                    resizable: {
                        beforeStart: false,
                        afterEnd   : false
                    },
                    draggable: false,
                    meta     : {
                        location: '407',
                        notes   : 'Intervenant: Ludovic O'
                    }
                },
                {
                    start    : addDays(new Date(), 6),
                    end      : addDays(new Date(), 6),
                    title    : 'Swift 4 - 407 | 13:00 - 18:00',
                    allDay   : false,
                    color    : {
                        primary  : '#f57c00',
                        secondary: '#ffb74d'
                    },
                    resizable: {
                        beforeStart: false,
                        afterEnd   : false
                    },
                    draggable: false,
                    meta     : {
                        location: '407',
                        notes   : 'Intervenant: Ludovic O'
                    }
                }
            ]
        }
    ];
}
