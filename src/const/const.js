// Validations for signup

const userNameVal = [
    v => !!v || 'Name is required',
    v => (v && v.length <= 20) || 'Name must be less than 10 characters'
]


const emailVal = [

    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',

];

const passwordVal = [(v) => !!v || "Password is required",

    (v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) || "Minimum eight characters, at least one letter and one number"
];

const ageVal = [(v) => !!v || "Age is required", (v) => /^[1-9]?[0-9]{1}$|^100$/.test(v) || "Age must be in digit", ];

const imgVal = [
    v => !v || v.size < 2000000 || 'Avatar size should be less than 2 MB!',
];

export {
    emailVal,
    userNameVal,
    passwordVal,
    ageVal,
    imgVal
};