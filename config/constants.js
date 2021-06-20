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
        regex: '^[a-zA-Z0-9가-힣ㄱ-ㅎ_]{1,20}$',
      },
    ],
    required: true,
  },
  {
    label: '이메일 주소',
    type: 'text',
    fields: [
      {
        name: 'email',
        placeholder: 'Email',
        regex: '^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$',
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
        placeholder: '- 없이 입력',
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
        placeholder: '남자',
        value: 'male',
        regex: '',
      },
      {
        name: 'gender',
        placeholder: '여자',
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
        placeholder: '연',
        regex: '',
      },
      {
        name: 'month',
        placeholder: '월',
        regex: '',
      },
      {
        name: 'day',
        placeholder: '일',
        regex: '',
      },
    ],
    required: true,
  },
]

export const ACCOUNT_STATUS = {
  PRE_ACTIVE: 0,
  ACTIVE: 1,
  NOT_ACTIVE: 2,
  LOCKED: 3,
  DELETED: 4,
}

export const MAIN_ARTICLE_STATUS = {
  RECRUITING: 1,
  FINISHED: 2,
  UPDATED: 3,
  DELETED: 4,
}

export const CATEGORY_ITEMS = [
  { index: 1, name: '여자만' },
  { index: 2, name: '동행 구해요' },
  { index: 3, name: '식사 같이 해요' },
  { index: 4, name: '차량 같이 타고 가요' },
  { index: 5, name: '비행기 같이 타요' },
]
