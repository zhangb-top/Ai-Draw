window.addEventListener('load', function () {
  const request = axios.create({
    baseURL: 'http://www.zhangb.top:8111',
  });

  // 请求数据
  const data = {
    // P表示第一次生成图片，U表示修改生成过的图片
    type: 'P',
    // 提示词
    prompt: '',
    // 如果要修改图片则不能为空
    imgId: "",
    // 如果要修改图片则不能为空，图片编号1-4
    num: 0
  }

  // 文本框输入事件
  document.querySelector('.prompt').addEventListener('change', function () {
    data.prompt = this.value
  })

  // 提交事件
  document.querySelector('.submit').addEventListener('click', makeImg)

  // 生成图片
  async function makeImg() {
    if (data.prompt.trim() === '') {
      showTip('提示词不能为空')
      data.prompt = ''
      document.querySelector('.prompt').value = ''
      return
    }
    const { data: res } = await request.post('/ai_draw/make', data)
    if (res.code === 0) return showTip('试试修改部分提示词')
    const wait = document.querySelector('.wait')
    const submit = document.querySelector('.submit')
    const prompt = document.querySelector('.prompt')
    wait.style.display = 'block'
    submit.disabled = true
    prompt.disabled = true
    prompt.placeholder = '图片加载中禁止输入'
    data.prompt = ''
    document.querySelector('.prompt').value = ''
    // 等待1分钟再获取图片
    let num = 60
    let timer = setInterval(() => {
      num--
      wait.innerHTML = `${num}秒后获取图片`
      if (num === 0) {
        clearInterval(timer)
        wait.style.display = 'none'
        submit.disabled = false
        prompt.disabled = false
        prompt.placeholder = '请输入提示词'
        getImg({ imgId: res.data.imgId })
      }
    }, 1000)
  }

  // 获取图片
  async function getImg(imgId) {
    const { data: res } = await request.post('/ai_draw/get', imgId)
    const image = document.querySelector('.image')
    image.src = `http://midjourney-api.ai-des.com${res.data.url}`
  }

  // 展示提示
  function showTip(message) {
    const tip = document.querySelector('.tip')
    tip.innerHTML = message
    tip.classList.remove('hide')
    tip.classList.add('show')
    setTimeout(() => {
      tip.classList.remove('show')
      tip.classList.add('hide')
    }, 2000)
  }
})