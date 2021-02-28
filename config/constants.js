export const SIGN_UP_FIELD = [
  {
    label: 'Name',
    type: 'text',
    fields: [
      {
        name: 'last_name',
        placeholder: 'Last Name',
        regex: '^[a-zA-Z가-힣]{1,30}$',
      },
      {
        name: 'first_name',
        placeholder: 'First Name',
        regex: '^[a-zA-Z가-힣]{1,30}$',
      },
    ],
    required: true,
  },
  {
    label: 'Nickname',
    type: 'nickname',
    fields: [
      {
        name: 'nick_name',
        placeholder: 'Please Enter Nickname',
        // eslint-disable-next-line no-useless-escape
        regex: '^[a-zA-Z0-9가-힣ㄱ-ㅎ!#$%*~_]{1,20}$',
      },
    ],
    required: true,
  },
  {
    label: 'Email',
    type: 'text',
    regex: [''],
    fields: [
      {
        name: 'encrypted_email',
        placeholder: 'Email',
        regex: '',
      },
    ],
    required: true,
  },
  {
    label: 'Phone',
    type: 'text',
    fields: [
      {
        name: 'encrypted_phone',
        placeholder: 'Phone',
        regex: '^0([0-9]{9,20})$',
      },
    ],
    required: true,
  },
  {
    label: 'gender',
    type: 'radio',
    placeholder: ['Male', 'Female'],
    fields: [
      {
        name: 'gender',
        placeholder: 'Male',
        value: 'male',
        regex: '',
      },
      {
        name: 'gender',
        placeholder: 'Female',
        value: 'female',
        regex: '',
      },
    ],
    required: true,
  },
  {
    label: 'Birthday',
    type: 'select',
    placeholder: ['Year', 'Month', 'Day'],
    fields: [
      {
        name: 'year',
        placeholder: 'Year',
        regex: '',
      },
      {
        name: 'month',
        placeholder: 'Month',
        regex: '',
      },
      {
        name: 'day',
        placeholder: 'Day',
        regex: '',
      },
    ],
    required: true,
  },
  {
    label: 'Nationality',
    type: 'country',
    placeholder: ['Please Select Nationality'],
    fields: [
      {
        name: 'country',
        placeholder: 'Please Select Nationality',
        regex: '',
      },
    ],
  },
]
