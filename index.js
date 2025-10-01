const app = Vue.createApp({
    data() {
        return {
            imgdata: [{
                name: 'NFT金融反詐騙',
                code: 'three.js/aos.js',
                content: '全國技藝競賽網頁設計作品。主題聚焦於 NFT\
                金融詐騙的防範與宣導。透過圖文並茂的說明、常見詐騙案例解析，以及實用的預防建議，提升大眾對於新型詐騙手法的警覺與應對能力。網站設有留言與互動功能，鼓勵用戶分享經驗、交流資訊。',
                img: 'images/Desktop - 1.png',
                color: ['#5d9b84', '#f59b55', '#fff', '#000'],
                href: 'https://shelly9457.github.io/contest/',
            }, {
                name: 'PlantyLife',
                code: 'tailwind/vue.js',
                content: 'PlantyLife 是我個人的 side project，一個以植物為主題的小網站。透過簡潔的設計與自然氛圍，呈現出與綠植共處的日常靈感。這個作品展現了我在前端設計與互動效果上的嘗試，也體現我對生活美學與數位設計結合的探索。',
                img: 'images/Desktop - 5.png',
                color: ['#5C715E', '#F6F1EB', '#A4C3B2', '#889a74'],
                href: 'https://shelly9457.github.io/PlantyLife/',
            }, {
                name: '集順廟明德宮',
                code: 'bootstrap5/aos.js',
                content: '大一服務學習課程的小組成果網站，主題為介紹新北市石碇區的集順廟明德宮。​網站內容涵蓋廟宇歷史、建築特色、交通指南及參拜資訊，旨在提升在地文化的可見度與親和力。​我在團隊中負責前端程式碼的撰寫與整合，將資料轉化為互動式網頁，讓訪客能以直觀方式了解廟宇資訊。',
                img: 'images/Desktop - 2.png',
                color: ['#e8633e', '#333333', '#f4f3ef', '#d9d9d9'],
                href: 'https://shelly9457.github.io/ShiDing/',
            }, {
                name: '新欣相伴',
                code: 'bootstrap5/vue.js',
                content: '高中專題製作成果。主題聚焦於新北市的特色農產與伴手禮，透過圖文介紹地瓜、芋頭、竹筍等在地農產品的產地風貌與文化價值。我負責網站的整體開發與前端設計，將內容轉化為結構清晰、操作直觀的互動網頁，呈現友善且富教育意義的使用體驗。',
                img: 'images/Desktop - 3.png',
                color: ['#b12b26', '#ffffff', '#897182', '#e8d3c3'],
                href: 'https://shelly9457.github.io/New-Taipei-City/',
            }, {
                name: '新北市伴手禮研發中心',
                code: 'bootstrap5/anime.js/aos.js',
                content: '參與新北市特產推廣加速器計畫的成果，旨在透過數位工具強化「新北市伴手禮研發中心」的能見度，讓更多人認識在地農產與創新伴手禮。我負責網站的設計與前端開發，將豐富的產品資訊與品牌故事轉化為易於瀏覽的響應式網頁，協助提升地方產業的整體形象與行銷效率。',
                img: 'images/Desktop - 4.png',
                color: ['#aa1f24', '#ffffff', '#dfce76', '#d38d8f'],
                href: 'https://shelly9457.github.io/center/',
            },],
            count: 0,
        }
    },
    methods: {
        next(n) {
            this.count = Math.max(this.count + n, 0)
            if (this.count >= this.imgdata.length) {
                this.count = 0
            }
            this.$refs.works.style.transform = `translateX(${-100 * this.count}%)`;
        }
    }
}).mount(".app")

window.addEventListener('scroll', e => {
    let scrolls = window.pageYOffset
    let width = window.innerWidth
    let img = document.querySelector(".me_img")
    if (scrolls <= 1000) {
        if (scrolls >= 500) {
            img.src = "images/me_img2.png"
            // if (width <= 1120) {
            //     img.style.transform = `translate(100px,${scrolls + 40}px)`
            // }else
            //  {
            // }
            img.style.transform = `translateY(${scrolls + 40}px)`
        } else {
            img.src = "images/me_img.png"
            img.style.transform = `translateY(${scrolls}px)`

        }
        if (width <= 1028) {
            img.style.transform = ''
        }
    }

})