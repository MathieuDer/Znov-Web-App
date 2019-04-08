export class ContactsFakeDb {
    public static contacts = [
        {
            'id': '5725a680b3249760ea21de52',
            'name': 'Abbott',
            'lastName': 'Keitch',
            'avatar': 'assets/images/avatars/Abbott.jpg',
            'nickname': 'Royalguard',
            'company': 'Saois',
            'jobTitle': 'Reponsable B3',
            'email': 'abbott@znov.com',
            'phone': '01 34 85 23 75',
            'address': '933 8th Street Stamford, CT 06902',
            'birthday': '',
            'notes': ''
        },
        {
            'id': '5725a680606588342058356d',
            'name': 'Arnold',
            'lastName': 'Matlock',
            'avatar': 'assets/images/avatars/Arnold.jpg',
            'nickname': 'Wanderer',
            'company': 'Laotcone',
            'jobTitle': 'Responsable M1',
            'email': 'arnold@znov.com',
            'phone': '01 75 34 84 23',
            'address': '906 Valley Road Michigan City, IN 46360',
            'birthday': '',
            'notes': ''
        },
        {
            'id': '5725a68009e20d0a9e9acf2a',
            'name': 'Barrera',
            'lastName': 'Bradbury',
            'avatar': 'assets/images/avatars/Barrera.jpg',
            'nickname': 'Jackal',
            'company': 'Unizim',
            'jobTitle': 'Directrice',
            'email': 'barrera@znov.com',
            'phone': '01 92 34 78 33',
            'address': '183 River Street Passaic, NJ 07055',
            'birthday': '',
            'notes': ''
        },
        {
            'id': '5725a6809fdd915739187ed5',
            'name': 'Blair',
            'lastName': 'Strangeway',
            'avatar': 'assets/images/avatars/Blair.jpg',
            'nickname': 'Knight',
            'company': 'Conedubdax',
            'jobTitle': 'Assistant de direction',
            'email': 'blair@znov.com',
            'phone': '01 92 03 83 23',
            'address': '143 Jones Street Eau Claire, WI 54701',
            'birthday': '',
            'notes': ''
        },
        {
            'id': '5725a68007920cf75051da64',
            'name': 'Boyle',
            'lastName': 'Winters',
            'avatar': 'assets/images/avatars/Boyle.jpg',
            'nickname': 'Jester',
            'company': 'Newo',
            'jobTitle': 'Communication',
            'email': 'boyle@znov.com',
            'phone': '01 83 92 23 93',
            'address': '218 Pearl Street Brandon, FL 33510',
            'birthday': '',
            'notes': ''
        },
        {
            'id': '5725a68031fdbb1db2c1af47',
            'name': 'Christy',
            'lastName': 'Camacho',
            'avatar': 'assets/images/avatars/Christy.jpg',
            'nickname': 'Mist',
            'company': 'uniway',
            'jobTitle': 'Marketing',
            'email': 'christy@znov.com',
            'phone': '01 92 83 23 84',
            'address': '329 Bridge Street Desoto, TX 75115',
            'birthday': '',
            'notes': ''
        },
        {
            'id': '5725a680bc670af746c435e2',
            'name': 'Copeland',
            'lastName': 'Redcliff',
            'avatar': 'assets/images/avatars/Copeland.jpg',
            'nickname': 'Cloudlaw',
            'company': 'Tempron',
            'jobTitle': 'Responsable Limart',
            'email': 'copeland@znov.com',
            'phone': '01 34 12 54 34',
            'address': '956 6th Avenue North Bergen, NJ 0704',
            'birthday': '',
            'notes': ''
        },
    ];

    public static user = [
        {
            'id': '5725a6802d10e277a0f35724',
            'name': 'John Doe',
            'avatar': 'assets/images/avatars/profile.jpg',
            'starred': [
                '5725a680bc670af746c435e2',
                '5725a68009e20d0a9e9acf2a'
            ],
            'frequentContacts': [
                '5725a680b3249760ea21de52',
                '5725a680606588342058356d',
                '5725a68031fdbb1db2c1af47'
            ],
            'direction': [
                '5725a68009e20d0a9e9acf2a',
                '5725a6809fdd915739187ed5'
            ],
            'groups': [
                {
                    'id': '5725a6802d10e277a0f35739',
                    'name': 'Friends',
                    'contactIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680e87cb319bd9bd673',
                        '5725a6802d10e277a0f35775'
                    ]
                },
                {
                    'id': '5725a6802d10e277a0f35749',
                    'name': 'Clients',
                    'contactIds': [
                        '5725a680cd7efa56a45aea5d',
                        '5725a68018c663044be49cbf',
                        '5725a6809413bf8a0a5272b1',
                        '5725a6803d87f1b77e17b62b'
                    ]
                },
                {
                    'id': '5725a6802d10e277a0f35329',
                    'name': 'Recent Workers',
                    'contactIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680653c265f5c79b5a9',
                        '5725a6808a178bfd034d6ecf',
                        '5725a6801146cce777df2a08'
                    ]
                }
            ]
        }
    ];
}
