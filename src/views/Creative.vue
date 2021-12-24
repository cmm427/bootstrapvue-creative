<template>
  <div class="creative">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#app">{{ brand }}</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto my-2 my-lg-0" >
            <li class="nav-item" v-for="(item, index) in navs" :key="index">
              <a class="nav-link" :href="item.link">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Masthead-->
    <header class="masthead">
      <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-8 align-self-end">
            <h1 class="text-white font-weight-bold">技术创新，我们一直在路上</h1>
            <hr class="divider" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 mb-5">多年来，{{ brand }}坚持走自主创新之路，凭借专业产品技术团队的不断创新，已取得超过12项软件著作权。</p>
            <a class="btn btn-primary btn-xl" href="#about">发现更多</a>
          </div>
        </div>
      </div>
    </header>

    <!-- About-->
    <section class="page-section bg-primary" id="about">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0">{{ brand }}</h2>
            <hr class="divider divider-light" />
            <p class="text-white-75 mb-4">品牌拥有网站、微信小程序、APP 等产品。为中小企业创业者提供工商财税、知识产品、IT技术、视觉特效、工业设计等一系列商务服务解决方案；为具备专业技能的知识型人才群体提升服务能力、提高收入、建立个人品牌、实现自我价值。</p>
            <p class="text-white-75 mb-4">让用户自由选择，让良将自主经营</p>
            <a class="btn btn-light btn-xl" href="#services">马上开始</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services-->
    <section class="page-section" id="services">
      <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">服务优势</h2>
        <hr class="divider" />
        <div class="row gx-4 gx-lg-5">
          <div class="col-lg-3 col-md-6 text-center" v-for="(item, index) in serviceInfo" :key="index">
            <div class="mt-5">
              <div class="mb-2"><i :class="item.biClass" class="fs-1 text-primary"></i></div>
              <h3 class="h4 mb-2">{{ item.title }}</h3>
              <p class="text-muted mb-0">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio-->
    <div id="portfolio">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-lg-4 col-sm-6" v-for="(item, index) in portfolioInfo" :key="index">
            <a class="portfolio-box" :href="item.portfolioFullSize" :title="item.portfolioProject">
              <img class="img-fluid" :src="item.portfolioThumbnails" alt="..." />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">{{ item.portfolioCategory }}</div>
                <div class="project-name">{{ item.portfolioProject }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to action-->
    <section class="page-section bg-dark text-white">
      <div class="container px-4 px-lg-5 text-center">
        <h2 class="mb-4">免费下载客户端</h2>
        <a class="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">立即体验</a>
      </div>
    </section>

    <!-- Contact-->
    <section class="page-section" id="contact">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 col-xl-6 text-center">
            <h2 class="mt-0">联系我们</h2>
            <hr class="divider" />
            <p class="text-muted mb-5">快速留言</p>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div class="col-lg-6">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                <label for="name">姓名</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                <label for="email">联系邮箱</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                <label for="phone">电话号码</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                <label for="message">你的问题？</label>
                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
              <!-- Submit Button-->
              <div class="d-grid"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">提交</button></div>
            </form>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-4 text-center mb-5 mb-lg-0">
                <i class="bi-phone fs-2 mb-3 text-muted"></i>
                <div>(0512) 123-4567</div>
            </div>
        </div>
      </div>
    </section>

    <!-- Footer1-->
    <section class="page-section bg-dark text-white-75">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 mt-5 ps-5">
            <h5 class="text-white">热门产品</h5>
            <div class="mt-3 brandInfo" v-for="(item, index) in bottomInfo.products" :key="index">
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="col-lg-3 mt-5 ps-5">
            <h5 class="text-white">联系我们</h5>
            <div class="mt-3 brandInfo" v-for="(item, index) in bottomInfo.contactInfo" :key="index">
              <i :class="item.biClass"></i>
              <span> {{ item.content }}</span>
            </div>
          </div>
          <div class="col-lg-3 mt-5 ps-5">
            <h5 class="text-white">关注我们</h5>
            <div class="mt-3 brandInfo" v-for="(item, index) in bottomInfo.mediaInfo" :key="index">
              <span> {{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer-->
    <footer class="bg-light py-5">
      <div class="container px-4 px-lg-5">
        <div class="small text-center text-muted">Copyright &copy; {{ footerInfo.copyrightFullYear }} All Rights Reserved. - {{ brand }}</div>
        <div class="small text-center text-muted">
          ICP备案：
          <a :href="footerInfo.ICPLink">{{ footerInfo.ICPName }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Creative',
  data() {
    return {
      brand: '公司名称',
      navs: [
        {
          name: '关于',
          link: '#about'
        },
        {
          name: '服务',
          link: '#services'
        },
        {
          name: '解决方案',
          link: '#portfolio'
        },
        {
          name: '联系我们',
          link: '#contact'
        }
      ],
      serviceInfo: [
        {
          biClass: 'bi-gem',
          title: '拥有高评价口碑',
          content: '诚心诚意为顾客提供专业、优质的服务。'
        },
        {
          biClass: 'bi-laptop',
          title: '产品服务高品质',
          content: '立足于全国市场，紧密结合各行业特点，深挖客户应用。'
        },
        {
          biClass: 'bi-globe',
          title: '解决问题周期短',
          content: '帮助企业利用大数据，在较短的周期内，制定更精准的营销策略。'
        },
        {
          biClass: 'bi-heart',
          title: '成长迅速空间大',
          content: "公司已成为集研发、销售、生产和服务于一体的现代高科技企业。"
        }
      ],
      portfolioInfo: [
        {
          portfolioCategory: '1元咨询',
          portfolioProject: '1元咨询',
          portfolioFullSize: require('@/assets/img/portfolio/fullsize/1.jpg'),
          portfolioThumbnails: require('@/assets/img/portfolio/thumbnails/1.jpg')
        },
        {
          portfolioCategory: '工商行政',
          portfolioProject: '1元咨询',
          portfolioFullSize: require('@/assets/img/portfolio/fullsize/2.jpg'),
          portfolioThumbnails: require('@/assets/img/portfolio/thumbnails/2.jpg')
        },
        {
          portfolioCategory: '财务',
          portfolioProject: '1元咨询',
          portfolioFullSize: require('@/assets/img/portfolio/fullsize/3.jpg'),
          portfolioThumbnails: require('@/assets/img/portfolio/thumbnails/3.jpg')
        },
        {
          portfolioCategory: '知识产权',
          portfolioProject: '1元咨询',
          portfolioFullSize: require('@/assets/img/portfolio/fullsize/4.jpg'),
          portfolioThumbnails: require('@/assets/img/portfolio/thumbnails/4.jpg')
        },
        {
          portfolioCategory: 'IT技术',
          portfolioProject: '1元咨询',
          portfolioFullSize: require('@/assets/img/portfolio/fullsize/5.jpg'),
          portfolioThumbnails: require('@/assets/img/portfolio/thumbnails/5.jpg')
        },
        {
          portfolioCategory: '视觉设计',
          portfolioProject: '1元咨询',
          portfolioFullSize: require('@/assets/img/portfolio/fullsize/6.jpg'),
          portfolioThumbnails: require('@/assets/img/portfolio/thumbnails/6.jpg')
        }
      ],
      bottomInfo: {
        brandInfo: {
          name: "公司名称",
          img: ""
        },
        products: [
          {
            name: "短信服务",
            link: ""
          },
          {
            name: "日志服务",
            link: ""
          },
          {
            name: "存储服务",
            link: ""
          },
          {
            name: "使用文档",
            link: ""
          },
          {
            name: "快速上手",
            link: ""
          }
        ],
        contactInfo: [
          {
            biClass: "bi bi-geo-alt",
            content: "中国北京市东城区某某大厦8-818室" 
          },
          {
            biClass: "bi bi-telephone",
            content: "400XXX8888" 
          },
          {
            biClass: "bi bi-envelope",
            content: "business@company.com" 
          }
        ],
        mediaInfo: [
          {
            name: "微博",
            content: "",
            image: ""
          },
          {
            name: "微信",
            content: "",
            image: ""
          },
        ]
      },
      footerInfo: {
        ICPName: '江B2-20200101-1',
        ICPLink: '',
        copyrightFullYear: new Date().getFullYear()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.brandInfo {
  >span {
    font-size: 0.75rem;
    font-weight: 400;
  }
  &:hover {
    color: $white;
  }
}
</style>