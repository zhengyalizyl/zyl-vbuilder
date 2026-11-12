export default{
  extends:['stylelint-config-standard'],
  override:[
    {
      files:["*.scss",'**/*.{scss}'],
      extends:['stylelint-config-standard-scss']
    },
    {
      files:["*.vue",'**/*.{vue}'],
      extends:['stylelint-config-standard-scss'],
      rules:{
        'unit-allow-list':["px","em","rem","%"]
      }
    }
  ]
}
