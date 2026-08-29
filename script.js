/* =========================================
   1. 滿版科技感視窗 (Modal) 互動邏輯
   ========================================= */
const projectData = {
    'floating': {
        title: 'Floating Life 浮生未央',
        img: 'jpg/Lee_Po-Sheng Portfolio_page-0023.jpg',
        desc: '這是一個探討空間動線與秩序美學的策展計畫。利用深邃的視覺與浮動元素，創造出脫離日常引力的展演空間。這裡未來可以補上更多關於你如何建構這些空間的 3D 渲染圖與理念。',
        video: 'hyXIjNYpf2k',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0024.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0025.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0026.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0027.jpg'
        ]
    },
    'mask': {
        title: 'MASK 賽博龐克防護面罩',
        img: 'jpg/Lee_Po-Sheng Portfolio_page-0009.jpg',
        desc: '深入探討主動式通風機制的氣流力學，以及 A2 模組化濾網的快拆結構設計。運用極簡的白色主體搭配科技霓虹光環，展現強烈的工業機甲美學。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0010.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0011.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0012.jpg'
        ]
    },
    'l1': {
        title: 'L1 RACING 概念賽車',
        img: 'jpg/l1.jpg',
        desc: '在 Rhinoceros 中經歷複雜的曲面建構，完美融合 Café Racer 的復古骨架與現代空力套件。特製的散熱鰭片與中心樞紐轉向系統展現了高度的機械合理性。',
        video: '58FEiOlyQSM',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0014.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0015.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0016.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0017.jpg'
        ]
    },
    'device': {
        title: 'Gain Support Device',
        img: 'jpg/device.jpg',
        desc: '針對 L3-S1 椎間盤區域的防護機制所開發。展示了如何將碳纖維的輕量化特性與乳膠減震科技結合，為現代工作者打造具備人因工程的穿戴式裝備。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0021.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0022.jpg'
        ]
    },
    'geometry': {
        title: 'GEOMETRY Mobile Chandelier',
        img: 'jpg/Lee_Po-Sheng Portfolio_page-0004.jpg',
        desc: '運用幾何分割與對稱美學打造的模組化吊燈設計。精妙的球形結構由多層對稱葉片組成，完美詮釋了形式與功能的統一。通過光影交錯的呈現，展現極簡主義與空間藝術的完美結合，為室內空間增添雕塑般的視覺韻味。',
        images: [
            'jpg/Lee_Po-Sheng Portfolio_page-0005.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0006.jpg',
            'jpg/Lee_Po-Sheng Portfolio_page-0007.jpg'
        ]
    },
    'pc-build-1': {
        title: '組裝電腦作品 01',
        img: 'jpg/電腦店/福利連顯卡/Gemini_Generated_Image_p48gkpp48gkpp48g.jpg',
        desc: '全白機身搭配滿版燈效與整線設計，芙莉蓮聯名顯卡直接上場。在預算約 6 萬的配置下，打造一台兼顧顏值、效能與 AI 運算的主機。',
        link: 'https://www.instagram.com/reel/DXCcrjrjNc3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        instagramEmbed: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DXCcrjrjNc3/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DXCcrjrjNc3/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">在 Instagram 查看這則貼文</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"><div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DXCcrjrjNc3/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">聯頡電腦💻－L.Jcomputer（@lj._.computer）分享的貼文</a></p></div></blockquote>
        `,
        images: [
            'jpg/電腦店/福利連顯卡/Gemini_Generated_Image_xuhakgxuhakgxuha.jpg',
            'jpg/電腦店/福利連顯卡/Gemini_Generated_Image_y16r1gy16r1gy16r.jpg'
        ]
    },
    'pc-build-2': {
        title: '組裝電腦作品 02',
        img: 'jpg/電腦店/32800/Gemini_Generated_Image_b1ov80b1ov80b1ov.jpg',
        desc: '這台看起來低調？但實力一點都不低調。3萬預算能組到什麼程度？遊戲順跑、日常不卡、剪輯也能撐住 💻黑化機身＋黃光燈效就是那種——不張揚但很能打的配置。',
        link: 'https://www.instagram.com/reel/DXUjOvJDHK_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        instagramEmbed: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DXUjOvJDHK_/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DXUjOvJDHK_/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">在 Instagram 查看這則貼文</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"><div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DXUjOvJDHK_/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">聯頡電腦💻－L.Jcomputer（@lj._.computer）分享的貼文</a></p></div></blockquote>`,
        images: [
            'jpg/電腦店/32800/Gemini_Generated_Image_wdah9fwdah9fwdah.jpg',
            'jpg/電腦店/32800/Gemini_Generated_Image_9xpgod9xpgod9xpg.jpg'
        ]
    },
    'pc-build-3': {
        title: '組裝電腦作品 03',
        img: 'jpg/電腦店/5070TI/Gemini_Generated_Image_r15k8or15k8or15k.jpg',
        desc: '5070 Ti 上場在 7 萬預算 裡，直接把效能拉到一個不太講理的高度。遊戲高幀數、AI運算、多工剪輯一句話：重活它扛，穩到你無感。。',
        link: 'https://www.instagram.com/reel/DYAWyEbk8-L/',
        instagramEmbed: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DYAWyEbk8-L/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DYAWyEbk8-L/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">在 Instagram 查看這則貼文</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DYAWyEbk8-L/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">聯頡電腦💻－L.Jcomputer（@lj._.computer）分享的貼文</a></p></div></blockquote>`,
        images: [
            'jpg/電腦店/5070TI/Gemini_Generated_Image_3kta3l3kta3l3kta.jpg',
            'jpg/電腦店/5070TI/Gemini_Generated_Image_yb86mhyb86mhyb86.jpg'
        ]
    },
    'quant-cortex': {
        title: 'QUANT CORTEX v11.3 // LIQUIDATION RADAR',
        img: 'jpg/加密貨幣/螢幕擷取畫面 2026-07-20 002026.jpg',
        desc: 'QUANT CORTEX v11.3 是一套加密貨幣市場洞察工具，即時追蹤市場清算動態，以量化視角協助掌握市場脈動。透過多層次的數據視覺化，提供即時的流動性分析與市場深度洞察。',
        link: 'https://script.google.com/macros/s/AKfycbzRhmi_C_x-pBGKsFG7DlRnInU23j7qeOUwNd1lBXIXsSoakwlxIjheZPWzfzJ9NP0o-w/exec',
        linkLabel: '前往網站 ↗',
        images: [
            'jpg/加密貨幣/螢幕擷取畫面 2026-07-20 002140.jpg',
            'jpg/加密貨幣/螢幕擷取畫面 2026-07-20 002144.jpg',
            'jpg/加密貨幣/螢幕擷取畫面 2026-07-20 002148.jpg'
        ]
    }
};

// 項目清單及導航管理
const projectList = ['floating', 'mask', 'l1', 'device', 'geometry', 'pc-build-1', 'pc-build-2', 'pc-build-3', 'quant-cortex'];
let currentProjectIndex = 0;
let lastFocusedElement = null; // 開啟視窗前的焦點元素，關閉後歸還

function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const bodyContent = document.getElementById('modal-body-content');
    const data = projectData[projectId];

    // 未知的作品 ID 直接略過，避免存取 undefined 而報錯
    if (!data) return;

    // 記錄當前項目索引
    currentProjectIndex = projectList.indexOf(projectId);

    // 在第一個/最後一個作品時，將對應箭頭設為不可用
    const prevArrow = document.querySelector('.nav-arrow-prev');
    const nextArrow = document.querySelector('.nav-arrow-next');
    if (prevArrow) prevArrow.classList.toggle('disabled', currentProjectIndex <= 0);
    if (nextArrow) nextArrow.classList.toggle('disabled', currentProjectIndex >= projectList.length - 1);

    // 動態將資料塞入視窗內
    let contentHTML = `
        <h2>${data.title}</h2>
    `;
    
    // 如果有影片，優先顯示影片
    if (data.video) {
        contentHTML += `
            <div class="video-container">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/${data.video}?autoplay=0" title="${data.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        `;
    }
    
    // 若有 Instagram 貼文，作為最上方主視覺，取代原本大圖的位置
    if (data.instagramEmbed) {
        contentHTML += `
            <div class="project-instagram">
                ${data.instagramEmbed}
            </div>
        `;
    }

    if (data.img) {
        contentHTML += `<img src="${data.img}" alt="${data.title}">`;
    }

    contentHTML += `
        <div class="project-details">
            <p>${data.desc}</p>
        </div>
    `;

    if (data.link) {
        const linkLabel = data.linkLabel || '在 Instagram 查看原始貼文 ↗';
        contentHTML += `
            <div class="project-link">
                <a class="contact-link" href="${data.link}" target="_blank" rel="noopener noreferrer">${linkLabel}</a>
            </div>
        `;
    }

    // 如果有額外圖片，添加到內容中
    if (data.images && data.images.length > 0) {
        contentHTML += `<div class="project-section-label">更多細節</div>`;
        contentHTML += `<div class="additional-images additional-images-${projectId}">`;
        data.images.forEach((imgSrc) => {
            contentHTML += `<img src="${imgSrc}" alt="${data.title} detail">`;
        });
        contentHTML += '</div>';
    }
    
    // 首次開啟時記住目前焦點，切換作品時不覆蓋
    if (!modal.classList.contains('active')) {
        lastFocusedElement = document.activeElement;
    }

    bodyContent.innerHTML = contentHTML;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-label', data.title ? `作品：${data.title}` : '作品詳細內容');
    document.body.style.overflow = 'hidden'; // 鎖住背後網頁不讓它滾動

    // 將焦點移入視窗，方便鍵盤操作與螢幕閱讀器
    const closeBtn = modal.querySelector('.close-btn');
    if (closeBtn) {
        setTimeout(() => closeBtn.focus(), 0);
    }
    
    // 為 modal 內容元素添加動畫
    setTimeout(() => {
        const heading = bodyContent.querySelector('h2');
        const images = bodyContent.querySelectorAll('img');
        const details = bodyContent.querySelector('.project-details');
        const additionalImages = bodyContent.querySelector('.additional-images');
        
        if (heading) heading.style.animation = 'fadeInUp 0.6s ease-out';
        if (details) details.style.animation = 'fadeInUp 0.6s ease-out 0.2s both';
        if (additionalImages) additionalImages.style.animation = 'fadeInUp 0.6s ease-out 0.3s both';
        
        images.forEach((img, index) => {
            if (index === 0) {
                img.style.animation = 'fadeInUp 0.6s ease-out 0.1s both';
            }
        });
    }, 50);
    
    // 為所有圖片添加點擊放大功能
    setTimeout(() => {
        const images = bodyContent.querySelectorAll('img');
        images.forEach((img) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => openLightbox(img.src));
        });

        if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
        } else if (!document.getElementById('instagram-embed-script')) {
            const script = document.createElement('script');
            script.id = 'instagram-embed-script';
            script.async = true;
            script.src = 'https://www.instagram.com/embed.js';
            document.body.appendChild(script);
        }
    }, 0);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto'; // 恢復背後網頁滾動

    // 把焦點還給開啟視窗前的元素（通常是被點擊的卡片）
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
    }
    lastFocusedElement = null;
}

// 將 Tab 焦點限制在指定容器內循環
function trapFocus(container, event) {
    const selector = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(container.querySelectorAll(selector)).filter((el) => {
        return !el.disabled && !el.classList.contains('disabled') && el.offsetParent !== null;
    });
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

// 導航到前後項目
function navigateProject(direction) {
    const newIndex = currentProjectIndex + direction;
    
    // 檢查邊界
    if (newIndex < 0 || newIndex >= projectList.length) {
        return; // 在邊界處不進行操作
    }
    
    const nextProjectId = projectList[newIndex];
    
    // 平滑關閉當前 modal，然後打開下一個
    const modal = document.getElementById('project-modal');
    const bodyContent = document.getElementById('modal-body-content');
    
    // 添加淡出動畫
    bodyContent.style.opacity = '0';
    bodyContent.style.transition = 'opacity 0.2s ease-out';
    
    setTimeout(() => {
        // 打開新項目
        openModal(nextProjectId);
        // 重置不透明度
        bodyContent.style.opacity = '1';
        bodyContent.style.transition = 'opacity 0.3s ease-in';
        // 滾動到頂部
        bodyContent.scrollTop = 0;
    }, 200);
}

// 點擊 Modal 外部深色遮罩時，自動關閉視窗
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
}

/* =========================================
   3. 圖片放大燈箱 (Lightbox) 功能
   ========================================= */
function openLightbox(imageSrc) {
    let lightbox = document.getElementById('lightbox');
    
    // 如果不存在則創建燈箱
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="Enlarged image">
        `;
        document.body.appendChild(lightbox);
        
        // 關閉按鈕事件
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        
        // 點擊燈箱外部關閉
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    lightbox.querySelector('.lightbox-image').src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        // 若底層的作品視窗仍開著，維持背景不可捲動
        const modal = document.getElementById('project-modal');
        const modalOpen = modal && modal.classList.contains('active');
        document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
    }
}

// 鍵盤操作：ESC 關閉、左右鍵切換作品、Tab 焦點鎖定
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxOpen = lightbox && lightbox.classList.contains('active');
    const modal = document.getElementById('project-modal');
    const modalOpen = modal && modal.classList.contains('active');

    if (e.key === 'Escape') {
        if (lightboxOpen) {
            closeLightbox();
        } else if (modalOpen) {
            closeModal();
        }
        return;
    }

    if (modalOpen && !lightboxOpen) {
        if (e.key === 'ArrowLeft') {
            navigateProject(-1);
        } else if (e.key === 'ArrowRight') {
            navigateProject(1);
        } else if (e.key === 'Tab') {
            trapFocus(modal, e);
        }
    }
});

/* =========================================
   4. 顯示模式與鮮豔度控制
   ========================================= */
const THEME_STORAGE_KEY = 'portfolio-theme';
const SATURATION_STORAGE_KEY = 'portfolio-saturation';

function clampSaturation(value) {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return 100;
    return Math.max(70, Math.min(150, numeric));
}

function applyTheme(theme) {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const finalTheme = theme === 'light' ? 'light' : 'dark';

    root.setAttribute('data-theme', finalTheme);

    if (toggleBtn) {
        const isLight = finalTheme === 'light';
        toggleBtn.textContent = isLight ? '暗色系' : '白色系';
        toggleBtn.setAttribute('aria-pressed', String(isLight));
    }

    try {
        localStorage.setItem(THEME_STORAGE_KEY, finalTheme);
    } catch (error) {
        // 忽略無法存取 localStorage 的情況
    }
}

function applySaturation(value) {
    const root = document.documentElement;
    const saturationRange = document.getElementById('saturation-range');
    const saturationValue = document.getElementById('saturation-value');
    const finalValue = clampSaturation(value);

    root.style.setProperty('--global-saturation', `${finalValue}%`);

    if (saturationRange) {
        saturationRange.value = String(finalValue);
    }

    if (saturationValue) {
        saturationValue.textContent = `${finalValue}%`;
    }

    try {
        localStorage.setItem(SATURATION_STORAGE_KEY, String(finalValue));
    } catch (error) {
        // 忽略無法存取 localStorage 的情況
    }
}

function initDisplayControls() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const saturationRange = document.getElementById('saturation-range');

    const storedTheme = (() => {
        try {
            return localStorage.getItem(THEME_STORAGE_KEY);
        } catch (error) {
            return null;
        }
    })();

    const storedSaturation = (() => {
        try {
            return localStorage.getItem(SATURATION_STORAGE_KEY);
        } catch (error) {
            return null;
        }
    })();

    applyTheme(storedTheme || 'dark');
    applySaturation(storedSaturation || 100);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const nextTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(nextTheme);
        });
    }

    if (saturationRange) {
        saturationRange.addEventListener('input', (event) => {
            applySaturation(event.target.value);
        });
    }
}

initDisplayControls();

/* =========================================
   5. 作品卡片鍵盤操作支援（可 Tab 聚焦、Enter / 空白鍵開啟）
   ========================================= */
function initCardKeyboard() {
    document.querySelectorAll('.portfolio-grid .card').forEach((card) => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        const heading = card.querySelector('h3');
        if (heading && !card.hasAttribute('aria-label')) {
            card.setAttribute('aria-label', `${heading.textContent.trim()} — 查看作品詳細`);
        }

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

initCardKeyboard();