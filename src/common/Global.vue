<script>
const images = {
  bgImg: "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/images/bg.jpg"
}
const icons = {
  backDark: "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/icons/back-dark.png",
  backLight: "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/icons/back-light.png",
  favicon: "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/icons/favicon.png"
};
const tab = {
  data: [
    {
      title: "前端",
      icon: "mdi-web",
      cards: [
        {
          title: "Resume",
          describe: "一个基于 Vue 的个人简历网站",
          img:
              "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/images/resume.jpg",
          link: "https://resume.lushan.tech",
          github: "https://github.com/LuShan123888/Resume",
        },
        {
          title: "MyProjects",
          describe: "一个用于展示项目的个人主页",
          img:
              "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/images/myprojects.jpg",
          link: "https://lushan.tech",
          github: "https://github.com/LuShan123888/lushan123888.github.io",
        },
      ],
    },
    {
      title: "后端",
      icon: "mdi-database",
      cards: [
        {
          title: "记账吧",
          describe: "一个简约的在线记账网站",
          img:
              "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/images/tally.jpg",
          link: "http://tally.lushan.tech",
          github: "https://github.com/LuShan123888/Tally-Frontend",
        },
        {
          title: '"光光爱"微信小程序后台管理系统',
          describe:
              '“光光爱”是利用互联网平台优势解决用餐浪费和小额捐赠的微信小程序。该项目包含光盘打卡，公益宣传，排行榜，爱心捐赠，商城兑换等功能。于2020年9月上线，现有团队成员30余人，用户1000+，入驻商家10+。',
          img:
              "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/images/gms.jpg",
          link: "https://gms.guangguangai.com/#/login",
          github: null,
        },
      ],
    },
    {
      title: "其他",
      icon: "mdi-dots-horizontal-circle-outline",
      cards: [
        {
          title: "SoftwareMagic",
          describe: "一个关于编程的个人知识库",
          img:
              "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/images/softwaremagic.jpg",
          link: "https://softwaremagic.lushan.tech",
          github: "https://github.com/LuShan123888/SoftwareMagic",
        },
      ],
    },
  ]
}

export default {
  images,
  icons,
  tab
};
</script>