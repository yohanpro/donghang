export const SIGN_UP_FIELD = [
  {
    label: '이름',
    type: 'text',
    fields: [
      {
        name: 'last_name',
        placeholder: '성',
        regex: '^[a-zA-Z가-힣]{1,30}$',
      },
      {
        name: 'first_name',
        placeholder: '이름',
        regex: '^[a-zA-Z가-힣]{1,30}$',
      },
    ],
    required: true,
  },
  {
    label: '닉네임',
    type: 'nickname',
    fields: [
      {
        name: 'nick_name',
        placeholder: '닉네임을 입력해주세요',
        // eslint-disable-next-line no-useless-escape
        regex: '^[a-zA-Z0-9가-힣ㄱ-ㅎ!#$%*~_]{1,20}$',
      },
    ],
    required: true,
  },
  {
    label: '이메일 주소',
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
    label: '전화번호',
    type: 'text',
    fields: [
      {
        name: 'phone',
        placeholder: 'Phone',
        regex: '^0([0-9]{9,20})$',
      },
    ],
    required: true,
  },
  {
    label: '성별',
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
    label: '생년월일',
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
]
