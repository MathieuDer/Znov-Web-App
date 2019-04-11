export class ProjectDashboardAdminEleveDb
{
    public static projects = [
        {
            'name': 'ACME Corp. Backend App'
        },
        {
            'name': 'ACME Corp. Frontend App'
        },
        {
            'name': 'Creapond'
        },
        {
            'name': 'Withinpixels'
        }
    ];

    public static widgets = {
        'widget1'      : {
            'title' : 'Moyenne Générale',
            'currentRange': 'DT',
            'data'        : {
                'count': 14,
                },
            },
         
        'widget2'      : {
            'title' : "Absences",
            'data'  : {
                'count': 4,
            },
        },

        'widget3'      : {
            'title' : 'Abs injustifées',
            'data'  : {
                'count': 10,
            },
        },

        'widget4'      : {
            'title' : 'Derniere note : PHP',
            'data'  : {
                'count': 14,
            },
        },

        'widget5'      : {
            'title'     : 'Github Issues',
            'ranges'    : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart' : {
                '2W': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 37
                            },
                            {
                                'name' : 'closed issues',
                                'value': 9
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 32
                            },
                            {
                                'name' : 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 39
                            },
                            {
                                'name' : 'closed issues',
                                'value': 9
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 27
                            },
                            {
                                'name' : 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 18
                            },
                            {
                                'name' : 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 24
                            },
                            {
                                'name' : 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 20
                            },
                            {
                                'name' : 'closed issues',
                                'value': 16
                            }
                        ]
                    }
                ],
                'LW': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 37
                            },
                            {
                                'name' : 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 24
                            },
                            {
                                'name' : 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 51
                            },
                            {
                                'name' : 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 31
                            },
                            {
                                'name' : 'closed issues',
                                'value': 13
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 29
                            },
                            {
                                'name' : 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 17
                            },
                            {
                                'name' : 'closed issues',
                                'value': 6
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 31
                            },
                            {
                                'name' : 'closed issues',
                                'value': 10
                            }
                        ]
                    }
                ],
                'TW': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 42
                            },
                            {
                                'name' : 'closed issues',
                                'value': 11
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 28
                            },
                            {
                                'name' : 'closed issues',
                                'value': 10
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 43
                            },
                            {
                                'name' : 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 34
                            },
                            {
                                'name' : 'closed issues',
                                'value': 11
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 20
                            },
                            {
                                'name' : 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 25
                            },
                            {
                                'name' : 'closed issues',
                                'value': 10
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 22
                            },
                            {
                                'name' : 'closed issues',
                                'value': 17
                            }
                        ]
                    }
                ]
            },
            'supporting': {
                'created'  : {
                    'label': 'CREATED',
                    'count': {
                        '2W': 48,
                        'LW': 46,
                        'TW': 54
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'CREATED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'Created',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'Created',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                'closed'   : {
                    'label': 'CLOSED',
                    'count': {
                        '2W': 27,
                        'LW': 31,
                        'TW': 26
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'reOpened' : {
                    'label': 'RE-OPENED',
                    'count': {
                        '2W': 4,
                        'LW': 5,
                        'TW': 2
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                'wontFix'  : {
                    'label': 'WON\'T FIX',
                    'count': {
                        '2W': 6,
                        'LW': 3,
                        'TW': 4
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 2
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'needsTest': {
                    'label': 'NEEDS TEST',
                    'count': {
                        '2W': 10,
                        'LW': 7,
                        'TW': 8
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'fixed'    : {
                    'label': 'FIXED',
                    'count': {
                        '2W': 21,
                        'LW': 17,
                        'TW': 14
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 2
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        'widget6'      : {
            'title'      : 'Task Distribution',
            'ranges'     : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart'  : {
                'TW': [
                    {
                        'name' : 'Frontend',
                        'value': 15
                    },
                    {
                        'name' : 'Backend',
                        'value': 20
                    },
                    {
                        'name' : 'API',
                        'value': 38
                    },
                    {
                        'name' : 'Issues',
                        'value': 27
                    }
                ],
                'LW': [
                    {
                        'name' : 'Frontend',
                        'value': 19
                    },
                    {
                        'name' : 'Backend',
                        'value': 16
                    },
                    {
                        'name' : 'API',
                        'value': 42
                    },
                    {
                        'name' : 'Issues',
                        'value': 23
                    }
                ],
                '2W': [
                    {
                        'name' : 'Frontend',
                        'value': 18
                    },
                    {
                        'name' : 'Backend',
                        'value': 17
                    },
                    {
                        'name' : 'API',
                        'value': 40
                    },
                    {
                        'name' : 'Issues',
                        'value': 25
                    }
                ]
            },
            'footerLeft' : {
                'title': 'Tasks Added',
                'count': {
                    '2W': 487,
                    'LW': 526,
                    'TW': 594
                }
            },
            'footerRight': {
                'title': 'Tasks Completed',
                'count': {
                    '2W': 193,
                    'LW': 260,
                    'TW': 287
                }
            }
        },
        'widget7'      : {
            'title'   : 'Schedule',
            'ranges'  : {
                'T' : 'Today',
                'TM': 'Tomorrow'
            },
            'schedule': {
                'T' : [
                    {
                        'title'   : 'Group Meeting',
                        'time'    : 'In 32 minutes',
                        'location': 'Room 1B'
                    },
                    {
                        'title': 'Coffee Break',
                        'time' : '10:30 AM'
                    },
                    {
                        'title': 'Public Beta Release',
                        'time' : '11:00 AM'
                    },
                    {
                        'title': 'Lunch',
                        'time' : '12:10 PM'
                    },
                    {
                        'title': 'Dinner with David',
                        'time' : '17:30 PM'
                    },
                    {
                        'title': 'Jane\'s Birthday Party',
                        'time' : '19:30 PM'
                    },
                    {
                        'title': 'Overseer\'s Retirement Party',
                        'time' : '21:30 PM'
                    }
                ],
                'TM': [
                    {
                        'title': 'Marketing Meeting',
                        'time' : '09:00 AM'
                    },
                    {
                        'title': 'Public Announcement',
                        'time' : '11:00 AM'
                    },
                    {
                        'title': 'Lunch',
                        'time' : '12:10 PM'
                    },
                    {
                        'title': 'Meeting with Beta Testers',
                        'time' : '15:00 AM'
                    },
                    {
                        'title': 'Live Stream',
                        'time' : '17:30 PM'
                    },
                    {
                        'title': 'Release Party',
                        'time' : '19:30 PM'
                    },
                    {
                        'title': 'CEO\'s Party',
                        'time' : '22:30 PM'
                    }
                ]
            }
        },
        'widget8'      : {
            'title'    : 'Budget Distribution',
            'mainChart': [
                {
                    'name' : 'Wireframing',
                    'value': 12
                },
                {
                    'name' : 'Design',
                    'value': 17
                },
                {
                    'name' : 'Coding',
                    'value': 28
                },
                {
                    'name' : 'Marketing',
                    'value': 25
                },
                {
                    'name' : 'Extra',
                    'value': 15
                }
            ]
        },
        'widget9'      : {
            'title'         : 'Spent',
            'ranges'        : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'weeklySpent'   : {
                'title': 'WEEKLY SPENT',
                'count': {
                    '2W': '2,682.85',
                    'LW': '1,445.34',
                    'TW': '3,630.15'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 6
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 1
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 3
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 2
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 4
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 6
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 2
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 2
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 1
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 3
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 2
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 6
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 5
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 3
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 6
                                }
                            ]
                        }
                    ]
                }
            },
            'totalSpent'    : {
                'title': 'TOTAL SPENT',
                'count': {
                    '2W': '29,682.85',
                    'LW': '31,128.19',
                    'TW': '34,758.34'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 3
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 2
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 2
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 7
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 7
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 5
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 7
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 8
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 8
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 6
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 4
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 1
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 6
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 7
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 5
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 4
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 7
                                }
                            ]
                        }
                    ]
                }
            },
            'remaining'     : {
                'title': 'REMAINING',
                'count': {
                    '2W': '94.317,15',
                    'LW': '92.871,81',
                    'TW': '89.241,66'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 1
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 5
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 7
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 2
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 3
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 2
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 1
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 2
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 8
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 6
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 2
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 1
                                }
                            ]
                        }
                    ]
                }
            },
            'totalRemaining': {
                'title': 'TOTAL BUDGET',
                'count': '124.000,00'
            },
            'totalBudget'   : {
                'title': 'TOTAL BUDGET',
                'count': '124.000,00'
            }
        },
        'widget10'     : {
            'title': 'Liste des élèves',
            'table': {
                'columns': [
                    {
                        'title': 'Nom élèves '
                    },
                    {
                        'title': 'Prémon '
                    },
                    {
                        'title': 'Classe'
                    },
                    {
                        'title': 'Ecole'
                    },
                    {
                        'title': 'Email'
                    },
                    {
                        'title': 'Modifier'
                    },
                    {
                        'title': 'Supprimer'
                    }
                ],
                'rows'   : [
                    [
                        {
                            'value'  : 'Dzemovski',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Edwin',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '3A',
                            'classes': 'text-success',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Ingésup',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'edwin.dzemovski@znov.com',
                            'classes': '',
                            'icon'   : ''
                        },
                    ],
                    [
                        {
                            'value'  : 'Derouiche',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Mathieu',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '3A',
                            'classes': 'text-success',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Ingésup',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'mathieu.derouiche@znov.com',
                            'classes': '',
                            'icon'   : ''
                        },
                    ],
                    [
                        {
                            'value'  : 'Ouallet',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Sébastien',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '3A',
                            'classes': 'text-success',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Ingésup',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'sebastien.ouallet@znov.com',
                            'classes': '',
                            'icon'   : ''
                        },
                    ],
                    [
                        {
                            'value'  : 'Ferreira',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Adrien',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '3A',
                            'classes': 'text-success',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Ingésup',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'adrien.ferreira@znov.com',
                            'classes': '',
                            'icon'   : ''
                        },
                    ],
                    [
                        {
                            'value'  : 'Misfud',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Julien',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '3A',
                            'classes': 'text-success',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'Ingésup',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : 'julien.mifsud@znov.com',
                            'classes': '',
                            'icon'   : ''
                        },
                    ],
                ]
            }
        },
        'widget13'     : {
            'title': 'Détails par Matière',
            'table': {
                'columns': [
                    {
                        'title': 'Matières'
                    },
                    {
                        'title': 'Total heures'
                    },
                    {
                        'title': "Heures justifiées"
                    },
                    {
                        'title': 'Injustifiés'
                    },
                    {
                        'title': "Total"
                    }
                ],
                'rows'   : [
                    [
                        {
                            'value'  : 'PHP',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '88 heures',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '8 heures',
                            'classes': 'text-success',
                            'icon'   : ''
                        },
                        {
                            'value'  : '-',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '8 heures',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'JAVA',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '90 heures',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '-',
                            'classes': 'text-success',
                            'icon'   : ''
                        },
                        {
                            'value'  : '8 heures',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '8 heures',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Management',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '40 heures',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '-',
                            'classes': 'text-success',
                            'icon'   : ''
                        },
                        {
                            'value'  : '4 heurese',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '4 heures',
                            'classes': '',
                            'icon'   : ''
                        }
                    ]
                    
                ]
            }
        },
        'widget14'     : {
            'title': 'Relevé de Notes',
            'table': {
                'columns': [
                    {
                        'title': 'Matières'
                    },
                    {
                        'title': 'Moyenne Etudiant'
                    }
                ],
                'rows'   : [
                    [
                        {
                            'value'  : 'PHP',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '14',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'JAVA',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '17',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Management',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '12',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Sécurité',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '16',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],

                ]
            }
        },
        'widget11'     : {
            'title': 'Classe 3A',
            'table': {
                'columns': ['avatar', 'name', 'email'],
                'rows'   : [
                    {
                        avatar  : 'assets/images/avatars/james.jpg',
                        name    : 'Jack Gilbert',
                        email   : 'jgilbert48@mail.com'
                    },
                    {
                        avatar  : 'assets/images/avatars/katherine.jpg',
                        name    : 'Kathy Anderson',
                        email   : 'kanderson49@mail.com.br',
                    },
                    {
                        avatar  : 'assets/images/avatars/andrew.jpg',
                        name    : 'Mark Turner',
                        email   : 'mturner4a@mail.com',
                    },
                    {
                        avatar  : 'assets/images/avatars/jane.jpg',
                        name    : 'Kathryn Martinez',
                        email   : 'kmartinez4b@mail.com'
                    },
                    {
                        avatar  : 'assets/images/avatars/alice.jpg',
                        name    : 'Annie Gonzales',
                        email   : 'agonzales4c@mail.edu'
                    },
                    {
                        avatar  : 'assets/images/avatars/vincent.jpg',
                        name    : 'Howard King',
                        email   : 'hking4d@mail.gov'
                    },
                    
                ]
            }
        },
        'weatherWidget': {
            'locations'      : {
                'NewYork': {
                    'name'           : 'Nanterre',
                    'icon'           : 'icon-rainy2',
                    'temp'           : {
                        'C': '17',
                        'F': '65'
                    },
                    'windSpeed'      : {
                        'KMH': 12,
                        'MPH': 7.5
                    },
                    'windDirection'  : 'Est',
                    'rainProbability': '48%',
                    'next3Days'      : [
                        {
                            'name': 'Samedi',
                            'icon': 'icon-rainy',
                            'temp': {
                                'C': '21',
                                'F': '70'
                            }
                        },
                        {
                            'name': 'Dimanche',
                            'icon': 'icon-windy3',
                            'temp': {
                                'C': '19',
                                'F': '66'
                            }
                        },
                        {
                            'name': 'Lundi',
                            'icon': 'icon-windy3',
                            'temp': {
                                'C': '24',
                                'F': '75'
                            }
                        }
                    ]
                }
            },
            'currentLocation': 'NewYork',
            'tempUnit'       : 'C',
            'speedUnit'      : 'KMH'
        }
    };
}
