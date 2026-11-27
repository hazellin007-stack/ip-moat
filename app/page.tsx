import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ArticleSection from "@/components/ArticleSection";
import SidebarTOC from "@/components/SidebarTOC";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <Hero />

      {/* ── GRID: sidebar + article ───────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:grid lg:grid-cols-[160px_1fr] lg:gap-16">
        <SidebarTOC />
        <div>{/* right column */}

      {/* ── REBIRTH META NOTE ────────────────────────────── */}
      <section className="py-10">
        <div className="max-w-2xl">
          <div className="border-l-2 border-blue-gray pl-4 space-y-2">
            <p className="text-xs font-en font-semibold tracking-widest text-warm-gray uppercase">
              關於這篇文章的敘事方式
            </p>
            <p className="text-sm text-warm-gray leading-relaxed">
              你一定刷過那種 AI 生成的重生劇：主角在最後一刻死去，然後帶著記憶回到五年前。
              他知道哪個合夥人會跑路、哪個決策會讓公司崩盤、哪封信會讓一切歸零。
              這次，他不再犯同樣的錯。
            </p>
            <p className="text-sm text-warm-gray leading-relaxed">
              這篇文章借用的是同一個敘事框架——<span className="text-charcoal font-medium">只不過那些劇情是真實發生過的</span>。
              我在執業這些年，看過太多創業者走進同一批陷阱。他們不是不聰明，是沒有人提前給過他們那張地圖。
            </p>
            <p className="text-sm font-medium text-charcoal">
              這次你帶著記憶重來。你的金手指，叫做 IP 策略。
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-2xl prose-article">
          <p className="text-lg font-medium text-charcoal">上一世，你死於資訊差。</p>
          <p>
            不是不夠努力。那個你花了五年做出來的產品是真實的，那個你以為會改變市場的技術是真實的。但那封讓你一切歸零的律師函也是真實的。
          </p>
          <p>
            競爭對手用了和你幾乎一樣的核心技術。他們的產品比你晚六個月上市，但他們比你早三個月申請了專利。
          </p>
          <p className="font-medium text-charcoal">完全合法。什麼都告不了，什麼都拿不回來。</p>

          <div className="my-8 grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-medium text-warm-gray tracking-widest uppercase">上一世</span>
              <Image
                src="/images/wojak_cry.png"
                alt="上一世，你死於資訊差 — 哭臉 Wojak 握著律師函"
                width={1122}
                height={1402}
                className="w-full rounded-sm"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-medium text-coral tracking-widest uppercase">這一世</span>
              <Image
                src="/images/wojak_smile.png"
                alt="這一世，你記得了 — 自信 Wojak 持專利證書，競爭對手收到律師函"
                width={1122}
                height={1402}
                className="w-full rounded-sm"
              />
            </div>
          </div>

          <hr className="section-rule my-8" />

          <p>
            現在你回來了。時間倒退五年，回到你第一次打開那份商業計畫書的那個下午。你記得後來發生的所有事。
          </p>
          <p>
            重生劇本裡的金手指，從來不是突然變強、突然有錢。是一樣更樸素的東西：<strong>超前的資訊</strong>。知道那些規則——在別人還沒意識到遊戲已經開始之前。
          </p>
          <p>這一世，你的金手指叫做 <strong>IP 策略</strong>。</p>

          <hr className="section-rule my-8" />

          <p className="text-warm-gray text-sm">
            在帶你進入規則之前，我想讓你知道：你上一世遇到的劇情，我在執業這些年看過太多次。有人在創業競賽上詳細解釋了自己的技術，八個月後那個技術出現在競品官網；有人把品牌做起來準備進軍東南亞，才發現商標在三個國家都被人搶先登記；有人拿到融資，欣喜若狂，進場就踩了別人的專利雷區。
          </p>
          <p className="text-warm-gray text-sm">
            他們來找我時問的幾乎都是同一個問題：「這樣算不算侵權？」而我的答案也幾乎一樣：「不算。」不是他們做錯了什麼，是沒有人給過他們那張地圖。
          </p>
          <p className="font-medium text-charcoal">
            這篇文章，就是你第一次沒有讀到的那張地圖。這一世，你不會再掉進同樣的坑。
          </p>
        </div>
        <hr className="section-rule mt-14" />
      </section>

      {/* ── PART 1 ────────────────────────────────────────── */}
      <ArticleSection id="part1" partNum="01" titleCn="IP 思維底層邏輯" titleEn="The IP Mindset — 5 mental models">
        <p className="italic text-warm-gray text-sm mb-8">打破五個你以為對的觀念</p>

        <p>
          在我開始之前，我想先問你一個問題：你覺得「申請了專利，就安全了」，這句話對不對？
        </p>
        <p>大多數人會說：對啊，這不就是申請專利的目的嗎？</p>
        <p><strong>這是第一個要被打破的幻覺。</strong></p>
        <p>
          IP（Intellectual Property，智慧財產權）不是一個保險箱，裝好東西、上了鎖、就高枕無憂。它更像一張作戰地圖——你要知道地形、選對武器、在對的地方插旗，才能守住你的陣地。而大多數創業者連地圖在哪裡都不知道，就出發了。
        </p>

        <h3 className="text-charcoal font-semibold text-lg mt-10 mb-3">1. 點子是空氣，壁壘才是資產</h3>
        <p>「點子」不受法律保護。這句話說起來殘忍，但是真的。</p>
        <p>
          著作權保護的是「表達」，不是「想法」。專利保護的是「技術方案」，不是「靈感」。商標保護的是「識別符號」，不是「品牌感覺」。
        </p>
        <p>
          你想出了一個讓咖啡更好喝的方法——那個「方法」在你腦子裡的時候，是任何人都可以想到的空氣。當你把它具體化成一個裝置、一個流程、一個配方，並且申請了專利，它才變成你的資產。
        </p>
        <p className="border-l-2 border-charcoal/30 px-4 py-2 text-warm-gray text-sm italic">
          空氣人人呼吸，只有裝進罐子裡才能賣。
        </p>

        <h3 className="text-charcoal font-semibold text-lg mt-10 mb-3">2. 先申請先贏（不是先發明先贏）</h3>
        <p>
          全世界絕大多數國家——包括台灣、中國大陸、歐盟、日本——都採用「先申請主義」。意思是：誰先去申請，那個專利就是誰的。不問誰先想到，不問誰先做出來。
        </p>
        <p>美國在 2013 年之前是少數的「先發明主義」國家，但現在也改成先申請制了。</p>
        <p>
          這代表什麼？你的競爭對手可以在你之後想到同樣的技術，但只要他比你早一天去申請，那個專利就是他的，不是你的。你甚至可能因此被告侵權。
        </p>
        <p className="border-l-2 border-charcoal/30 px-4 py-2 text-warm-gray text-sm italic">
          這不是不公平，這是規則。你必須了解規則，才能贏。
        </p>

        <h3 className="text-charcoal font-semibold text-lg mt-10 mb-3">3. IP 有四種材料，用錯蓋不了城牆</h3>
        <p>很多人把 IP 當成一個東西，但它其實是四種完全不同的工具：</p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left py-2 pr-4 font-semibold text-charcoal">工具</th>
                <th className="text-left py-2 pr-4 font-semibold text-charcoal">保護對象</th>
                <th className="text-left py-2 pr-4 font-semibold text-charcoal">有效期</th>
                <th className="text-left py-2 font-semibold text-charcoal">取得方式</th>
              </tr>
            </thead>
            <tbody className="text-warm-gray divide-y divide-rule/50">
              {[
                ["專利", "技術、結構、外觀", "20年（發明）/ 12年（新式樣）", "申請審查"],
                ["商標", "品牌名稱、Logo、顏色、聲音", "10年（可無限展延）", "申請審查"],
                ["著作權", "文章、程式碼、設計、音樂", "著作人終身+50年", "自動取得"],
                ["營業秘密", "配方、製程、客戶名單", "無限期（只要保密）", "合理保密措施"],
              ].map(([tool, obj, dur, how]) => (
                <tr key={tool}>
                  <td className="py-2 pr-4 font-medium text-charcoal">{tool}</td>
                  <td className="py-2 pr-4">{obj}</td>
                  <td className="py-2 pr-4">{dur}</td>
                  <td className="py-2">{how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="border-l-2 border-charcoal/30 px-4 py-2 text-warm-gray text-sm italic">
          用錯工具，就像買了火險，結果遇到水災——保費繳了，損失一毛也賠不到。
        </p>

        <h3 className="text-charcoal font-semibold text-lg mt-10 mb-3">4. IP 是進攻武器，不只是盾牌</h3>
        <p>大多數人想到 IP，想的是「保護」。但真正懂 IP 的人，想的是「運用」。</p>
        <p>一件專利可以：</p>
        <ul className="list-none space-y-1.5 my-4 text-sm">
          {[
            ["授權", "給競爭對手收取授權金，讓他們替你賺錢"],
            ["估值", "放大公司帳面資產，影響融資條件"],
            ["訴訟", "讓侵權者退出市場或支付賠償"],
            ["交叉授權", "換取對方的技術，降低開發成本"],
            ["嚇阻", "讓潛在競品看到你的專利組合後，選擇避開"],
          ].map(([key, val]) => (
            <li key={key} className="flex gap-2">
              <span className="text-coral font-semibold shrink-0">{key}</span>
              <span className="text-warm-gray">{val}</span>
            </li>
          ))}
        </ul>
        <p className="bg-bg-card border-l-2 border-coral px-4 py-3 rounded-sm text-sm">
          護城河的功能不只是讓敵人進不來，還可以讓你出去攻城略地。
        </p>

        <h3 className="text-charcoal font-semibold text-lg mt-10 mb-3">5. 第一天就要想，不是上市前才補</h3>
        <p>
          很多創業者的 IP 規劃是這樣的：產品先做，等做出來了再說。等融資成功了，再去申請。等要上市了，發現有漏洞，趕快補。
        </p>
        <p>這個順序，代價極高。</p>
        <p>
          申請專利有「新穎性」要求——一旦你公開過這個技術（展覽、論文、社群媒體），在很多國家就喪失了申請資格。你補不回來。
        </p>
        <p>
          更重要的是：護城河要在競爭對手進來之前建好，而不是他們已經在你的市場裡了，你才開始施工。
        </p>
      </ArticleSection>

      {/* ── PART 2 ────────────────────────────────────────── */}
      <ArticleSection id="part2" partNum="02" titleCn="一個發明家的故事" titleEn="A Designer's Story">
        <p className="italic text-warm-gray text-sm mb-8">
          在你執行計畫之前，先認識一個沒有重來機會、卻靠著懂規則逆轉全局的人。
        </p>

        <p>英國，某個尋常的下午。</p>
        <p>
          一個發明家——不是工程師，不是科學家——在使用一台日常家用裝置時，發現它的效能越來越差。他拆開來看，找到了問題的根源：一個用完就必須換新的消耗品。它的存在，從結構上就注定了整台裝置的衰亡——但對製造商來說，這個設計是完美的。因為你每次用完，就必須再買一個。
        </p>
        <p>他想：如果把這個消耗品整個革命掉呢？</p>
        <p>
          他在某個工業現場觀察到一種物理分離的方式——不靠耗材，不會堵塞，靠的是力學本身。他想把這個原理縮小，裝進那台裝置裡。
        </p>
        <p>接下來，他花了五年，做了 <strong>5,127 個原型機</strong>。不是 5 個，不是 50 個——5,127 個。</p>

        <p className="bg-bg-card border-l-2 border-coral px-4 py-3 rounded-sm text-sm my-8">
          但在這整段時間裡，他做了一件大多數人不會做的事：<strong>他把每一個技術突破，每一個關鍵設計，都申請了專利。不是等產品完成，是邊做邊申請。</strong>
        </p>

        <p>
          幾年後，他拿著成品，去敲當時行業裡幾乎所有巨頭的門。
        </p>
        <p>他們都拒絕了他。</p>
        <p>
          原因不是技術不夠好。原因是：<em>那個他想革命掉的消耗品，每年替這些大廠貢獻數億美元的穩定收入。</em>他的創新，等於要親手殺死他們最賺錢的商業模式。對他們來說，這不是機會，是威脅。
        </p>
        <p>
          等到大廠拒絕他的時候，他手上已經有一疊專利。他先授權出去，用授權金撐起現金流。幾年後，他自己成立公司，自己生產、自己銷售。
        </p>
        <p>
          市場給了他答案。他的產品推出後，很快站穩了腳步。其中一個大廠坐不住了——推出了一款設計明顯仿照他核心原理的產品。
        </p>
        <p><strong>他提告。</strong></p>
        <p>
          法院判決對方侵犯他的專利，判賠 400 萬英鎊。這就是護城河打臉的樣子——不是打架，不是喊話，是拿著一疊提前插好的旗，讓法院替你說話。
        </p>

        <p className="mt-8 text-warm-gray italic text-sm">
          你猜到這個發明家是誰了嗎？先繼續讀。答案在後面。
        </p>
      </ArticleSection>

      {/* ── PART 3 ────────────────────────────────────────── */}
      <ArticleSection id="part3" partNum="03" titleCn="六個讓創業者摔跤的陷阱" titleEn="Fatal IP Mistakes">
        <p className="italic text-warm-gray text-sm mb-4">
          在我揭曉那個發明家是誰之前——先認識六個角色。
        </p>
        <p className="text-warm-gray text-sm mb-8">
          穿越劇裡總有幾個熟悉的臉孔：熱血衝動的主角、完美主義的謀士、貪功冒進的將軍……這些人在商業戰場上也存在，只是他們摔的坑，叫做 IP 陷阱。如果你在裡面認出了自己——好，那就是你這輩子最值得的閱讀投資。
        </p>

        {[
          {
            num: "01",
            archetype: "熱血主角型",
            name: "公開陷阱",
            hook: "你有沒有在台上滔滔不絕講解你的技術，心裡還覺得——這就是最好的行銷？",
            scene: "你去參加了一場創業競賽，或者接受了媒體採訪，或者在社群上分享了技術突破。評審、記者、粉絲都對你的核心原理印象深刻。你覺得這些曝光讓你領先了。\n\n法律的看法不一樣。大多數國家的專利法要求「新穎性」——申請日之前，這個技術不能已經被公開過。台灣有六個月的優惠補救期，但很多國家沒有。你公開的那一刻，等於把鑰匙交給了所有聽眾。完全合法地。",
            escape: "如果那個發明家坐在你身旁，他會在你上台前拉住你：『先等一下。這份資料裡有幾個技術點，我們今天上午就把申請書送出去。你想展示什麼都行，但申請日要先確立。三十分鐘的事。』",
            contrast: "上一世你走上台，贏得掌聲，輸掉了技術。這一世你先送出申請書，再走上台。",
            image: { src: "/images/trap01_stage.png", alt: "公開陷阱：上台發表贏得掌聲，競爭對手搶先申請專利，優惠期比較", width: 1122, height: 1402 },
          },
          {
            num: "02",
            archetype: "完美主義型",
            name: "晚申請陷阱",
            hook: "你說過這句話嗎：「等我把功能做完整一點，再去申請。」",
            scene: "你有核心技術，你知道它是對的，但你想再優化一下。再讓產品跑一個月。再做幾個 A/B 測試確認方向。這感覺很負責任。\n\n但申請的不是完成品，是權利範圍。競爭對手不需要等你做完——他只需要把你還在打磨的那個邏輯，比你早一天送出申請書。先申請主義，先到先得，不問誰做得更好。",
            escape: "如果那個發明家坐在你身旁，他會說：『我的原型機做到第一百個的那天，我就送出去了。不完美沒關係，之後又做了五千多個，每一個新突破都再申請一次。先射箭，再調整靶心。』",
            contrast: "上一世你等到完美，競爭對手等到的是申請日。這一世你先插旗，再慢慢雕琢。",
            metaphor: "瓊斯博士潛進神廟，屏息精算金像的重量，一粒一粒往天平另一端加沙子，非要做到「完美等重」才敢動手——多一克觸發機關，少一克也觸發機關。他追求的是萬無一失，這感覺很專業、很負責任。\n\n然後呢？他費盡千辛萬苦把金像捧出洞口，一轉身，撞見貝洛克。貝洛克沒鑽過山洞、沒算過重量、沒流一滴汗，只是笑笑站在出口，優雅地伸出手：「瓊斯博士，謝謝你這麼貼心，幫我把它拿出來。」金像，歸他。\n\n先申請主義就是那個洞口。你還在神廟深處為了那幾克的完美斟酌沙子（「再跑一個月」「再做幾輪 A/B」），你的競爭對手就是站在洞口的貝洛克——他不必比你更會挖寶，他只需要比你早一天伸手。專利局從不問「誰做得更好」，只問「誰先到」。",
            metaphorLabel: "印第安納瓊斯 · 開場那尊金像",
            image: { src: "/images/pf02.png", alt: "印第安納瓊斯換金像——晚申請陷阱，先到先得", width: 1122, height: 1402 },
          },
          {
            num: "03",
            archetype: "用錯武器型",
            name: "買錯保險陷阱",
            hook: "你花了幾百萬拿到了一疊專利證書——但律師看完後告訴你：這些專利，一件都打不到對方。",
            scene: "一個硬體新創耗資數百萬，在八個國家取得了產品外觀和部分結構專利。看起來保護很完整。\n\n兩年後，競爭對手推出功能幾乎一樣的產品。他們的工程師讀過你在技術研討會發表的那篇論文——那篇詳細描述核心製程的論文。他們複製了製程，並且繞開了你所有結構專利（你的專利保護外觀，他們改了外觀）。\n\n同一個錯誤，兩個層次：保護了「形」，沒有保護「法」；然後把核心製程當論文發表，替競爭對手省去三年研發費用，還免費的。",
            escape: "如果那個發明家坐在你身旁，他會先問：『你最怕對方拿走的是哪一個部分？』外觀（→ 設計專利）？製程方法（→ 發明專利 + 保密）？配方（→ 營業秘密，永遠不要公開）？答案決定策略，不是預算大小決定策略。",
            contrast: "上一世你保護了表面，對方複製了核心，還用你自己的論文當研發藍圖。這一世你先問：我真正怕被拿走的是哪一個？",
            metaphor: "帝國耗盡資源蓋了一座能毀滅星球的終極兵器，卻有一份外洩的設計藍圖，讓反抗軍找到那個「剛好塞得進質子魚雷」的兩公尺排氣孔。你的研討會論文就是那份藍圖。對手不是「破解」你的外觀專利，是你親手把防線的縫隙標好座標、附上比例尺，還登在期刊上供人引用。",
            metaphorLabel: "星際大戰 · 死星的排氣孔",
            image: { src: "/images/pf03.png", alt: "星際大戰死星排氣孔——買錯保險陷阱", width: 1672, height: 941 },
          },
          {
            num: "04",
            archetype: "占錯領地型",
            name: "插旗錯地陷阱",
            hook: "台灣的商標你都登記好了，覺得準備好了——然後你要進中國大陸、東南亞，才發現一切要重來。",
            scene: "台灣的商標，只保護台灣市場。在台灣申請得再完整，在中國大陸就是零。更常見的情況是：你準備進入前，才發現品牌名稱已經被「商標蟑螂」搶先在當地登記了。要拿回來，要麼打官司、要麼改名、要麼買回來——哪條路都很貴。\n\n護城河要蓋在你要守的那塊土地上，不是你辦公室所在的那塊地。",
            escape: "如果那個發明家坐在你身旁，他會說：『你打算在哪裡賣？在那裡申請。不是在你習慣待的地方申請。保護跟著市場走，不是跟著你的辦公室走。』",
            contrast: "上一世你守住了台灣，丟掉了東南亞。這一世你先確認戰場，再部署兵力。",
            metaphor: "鄧不利多和哈利喝下整湖毒水、拼死搶到那個墜飾盒，打開一看——裡面只有一張紙條：「我知道我會死，我已經把真的拿走了。」你在台灣插旗插得轟轟烈烈，但東南亞那位 R.A.B. 早就先你一步把真正值錢的那塊地登記完畢，現在正坐著等你上門付贖金。",
            metaphorLabel: "哈利波特 · 真正的分靈體早被 R.A.B. 拿走了",
            image: { src: "/images/pf04.png", alt: "哈利波特分靈體被R.A.B.拿走——插旗錯地陷阱", width: 1672, height: 941 },
          },
          {
            num: "05",
            archetype: "無畏衝鋒型",
            name: "無照上路陷阱",
            hook: "你做了兩年，感覺走在一條沒人走過的路上——然後一封律師函告訴你：這條路有主人。",
            scene: "創業者開發了一款革新型醫療設備，做了兩年，準備上市，收到律師函——競爭對手的某一件核心專利，你的產品已經落入其保護範圍。\n\n你不是在自己的空地上蓋房子，你是在別人的土地上蓋了兩年，才發現地契不是你的。這叫 Freedom to Operate（FTO）分析——確認你有沒有「行走自由」。絕大多數新創都省略了這一步，直到收到律師函。",
            escape: "如果那個發明家坐在你身旁，他會說：『在你投入大量資源之前，先做一次地圖勘查。知道哪裡是雷區，才能選擇繞開，或是有意識地挑戰它。』",
            contrast: "上一世你衝進副本，才發現地圖是別人的。這一世你先勘查地形，再決定走哪條路。",
            metaphor: "你卯足兩年功力，使出畢生最強的一拳（產品上市），火雲邪神只用兩根手指輕輕一夾，面無表情地問：「還有誰？」那兩根手指，就是律師函。沒做 FTO（自由實施分析），你的全力一擊在對手眼裡只是個可以隨手夾住的子彈。",
            metaphorLabel: "功夫 · 火雲邪神「還有誰？」",
            image: { src: "/images/pf05.png", alt: "功夫火雲邪神夾子彈——無照上路陷阱", width: 1122, height: 1402 },
          },
          {
            num: "06",
            archetype: "急於擴張型",
            name: "帝國夢陷阱",
            hook: "剛拿到融資，顧問說：趁現在有錢，趕快把所有市場都保護起來。你覺得這是萬全之策。",
            scene: "你申請了 PCT 指定三十個國家，商標申請了十幾個類別。聽起來很完整。\n\n讓我告訴你一個數字：一件歐洲專利，在十三、四個國家完成領證，光是各國領證費用——不含申請費、不含多次答辯費——就接近兩百萬台幣。每年還有維持年費，不繳就失效。三十個國家乘以多件申請，最後很多新創維護費繳不出來，讓申請自然失效。花了幾百萬，什麼都沒留下來。",
            escape: "如果那個發明家坐在你身旁，他會說：『我有七千多件專利，但我是一步一步積累的。你現在最重要的市場是哪幾個？先把那幾個守好。廣撒的淺層保護，遠不如深耕三到五個核心市場。』",
            contrast: "上一世你把錢鋪滿三十個國家，結果一個都守不住。這一世你選三個，守得鐵桶一般。",
            metaphor: "這句名言的重點，從來不是「舉起地球」，而是被大家忽略的前半句：支點。一根槓桿要撬動地球，需要三樣東西——一根夠長的桿、一個準確的支點，以及把全部力氣集中在「同一端」。\n\n「帝國夢」型的新創，只聽見「舉起地球」就興奮衝出去：PCT 指定三十國、商標報十幾個類別。這不是架槓桿，這是把雙手平貼在地球上用蠻力到處推。沒有支點、沒有桿，只有融資換來的那筆力氣，被三十個方向均勻地分散掉。\n\n真正的槓桿動作是：先找出那一兩個能撬動整個市場的「支點國家」——主要生產地、主要銷售地、競爭對手的所在地——把資源重重壓在那一端。與其在三十個國家各插一根撬不動任何東西的短棍，不如在三個支點上，架三根真正壓得動的長桿。武術裡叫「四兩撥千斤」：贏的不是力氣大，是力氣放對地方。",
            metaphorLabel: "阿基米德 · 給我一個支點，我就能舉起整個地球",
            image: { src: "/images/pf06.png", alt: "阿基米德槓桿——帝國夢陷阱，支點比蠻力更重要", width: 1122, height: 1402 },
          },
        ].map((trap) => (
          <div key={trap.num} className="mb-10 last:mb-0">
            {/* Header */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-display text-coral text-2xl leading-none">{trap.num}</span>
              <h3 className="text-charcoal font-semibold text-lg">{trap.name}</h3>
            </div>
            <span className="inline-block text-xs font-en font-medium text-warm-gray mb-4">
              {trap.archetype}
            </span>

            {/* Hook — question directed at reader, blue-gray accent */}
            <p className="bg-blue-gray/10 border-l-2 border-blue-gray px-4 py-3 rounded-sm text-sm text-charcoal font-medium mb-4">
              {trap.hook}
            </p>

            {/* Scene — what happens */}
            <div className="text-warm-gray text-sm leading-relaxed mb-4 space-y-3">
              {trap.scene.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Escape — coral accent, advisor voice */}
            <div className="bg-bg-card border-l-2 border-coral px-4 py-3 rounded-sm text-sm">
              <span className="text-coral font-semibold">逃脫路徑：</span>{" "}
              {trap.escape}
            </div>

            {"contrast" in trap && trap.contrast && (
              <p className="mt-3 text-xs font-en text-warm-gray italic border-t border-rule pt-3">
                {trap.contrast}
              </p>
            )}
            {"metaphor" in trap && trap.metaphor && (
              <div className="mt-6 bg-charcoal rounded-sm px-5 py-4 space-y-2">
                <p className="text-xs font-en font-semibold tracking-widest text-coral uppercase">
                  🎬 {(trap as any).metaphorLabel}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">{trap.metaphor}</p>
              </div>
            )}
            {"image" in trap && trap.image && (
              <div className="mt-4 rounded-sm overflow-hidden relative">
                <Image
                  src={trap.image.src}
                  alt={trap.image.alt}
                  width={trap.image.width}
                  height={trap.image.height}
                  className="w-full"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-charcoal text-coral text-xs font-medium tracking-widest px-3 py-1.5 rounded-full uppercase">
                    {trap.archetype}
                  </span>
                </div>
              </div>
            )}
            {trap.num !== "06" && <hr className="section-rule mt-8" />}
          </div>
        ))}
      </ArticleSection>

      {/* ── REVEAL ────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-2xl">

          {/* 最後一次猜謎 */}
          <div className="border border-rule rounded-sm p-6 mb-10 bg-bg-card">
            <p className="text-xs font-en font-semibold tracking-widest text-warm-gray uppercase mb-5">
              最後一次機會——你猜到了嗎？
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "英國，1970 年代末",
                "吸塵器",
                "集塵袋",
                "旋風分離技術",
                "5,127 個原型機",
                "Hoover",
                "400 萬英鎊",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-rule text-charcoal px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="font-display text-4xl text-charcoal mb-6 leading-none">揭曉。</p>
          <h2 className="text-charcoal text-2xl font-semibold mb-6">
            那個發明家叫做 James Dyson。
          </h2>
          <div className="prose-article">
            <p>
              那 5,127 個原型機是真實的。那些大廠的拒絕是真實的。那場在英國告贏 Hoover、拿回 400 萬英鎊的官司是真實的。今天，Dyson 全球擁有超過七千件專利——不只是盾牌，是他攻城略地的武器和地圖。
            </p>

            <div className="my-8 rounded-sm overflow-hidden">
              <Image
                src="/images/dyson_timeline.png"
                alt="James Dyson 從被拒絕到建立帝國的時間軸"
                width={1200}
                height={480}
                className="w-full"
              />
            </div>

            <hr className="section-rule my-8" />

            <p>但故事沒有在英國終止。</p>
            <p>
              當 Dyson 進入中國市場，護城河必須重新建。中國的競爭者看上了他的產品外觀——那個透明集塵筒、那個獨特的旋風結構造型——開始複製，推出仿冒品。
            </p>
            <p>
              但 Dyson 早就在中國申請了外觀設計專利。他拿著那些在中國申請的專利，在中國的法院提告，拿回了他應得的判決。
            </p>
            <p className="bg-bg-card border-l-2 border-coral px-4 py-3 rounded-sm text-sm">
              這個細節很重要：他不是在中國被保護，因為他在英國有專利。他在中國被保護，是因為他<strong>在中國申請了</strong>專利。兩件事，完全不同。
            </p>
            <p>
              台灣有太多品牌，在台灣市場做得很好，進入中國卻發現商標被搶先登記，外觀被本地廠商複製——因為台灣的保護，止步於台灣。護城河，要蓋在你想守的那塊土地上。
            </p>
          </div>
        </div>
        <hr className="section-rule mt-14" />
      </section>

      {/* ── PART 4 ────────────────────────────────────────── */}
      <ArticleSection id="part4" partNum="04" titleCn="從點子到護城河的 30 天框架" titleEn="30-Day Moat Framework">
        <p className="italic text-warm-gray text-sm mb-8">
          你不需要懂所有法律，你只需要問對問題
        </p>

        <p>
          很多人覺得 IP 很複雜，是律師和專利師才能搞懂的東西。這個想法本身，就讓你輸在起跑點了。
        </p>
        <p>你不需要成為專家，但你需要知道：什麼時候該問什麼問題。</p>

        <h3 className="text-charcoal font-semibold text-lg mt-10 mb-4">你真正怕被人拿走的是什麼？</h3>
        <div className="bg-bg-card rounded-sm p-5 text-sm space-y-2 font-en my-6">
          {[
            ["技術原理、功能、製程", "→", "發明專利"],
            ["外觀、造型、UI/UX 視覺設計", "→", "新式樣專利（設計專利）"],
            ["品牌名稱、Logo、標語、包裝", "→", "商標"],
            ["程式碼、文章、影像、音樂", "→", "著作權（自動取得）"],
            ["配方、客戶名單、內部製程", "→", "營業秘密"],
          ].map(([from, arrow, to]) => (
            <div key={from} className="flex items-baseline gap-2">
              <span className="text-warm-gray flex-1 min-w-0">{from}</span>
              <span className="text-warm-gray/50 shrink-0">{arrow}</span>
              <span className="text-coral font-semibold shrink-0">{to}</span>
            </div>
          ))}
        </div>

        <h3 className="text-charcoal font-semibold text-lg mt-10 mb-4">30 天行動清單</h3>
        <div className="space-y-3">
          {[
            {
              day: "Day 0",
              title: "建立保密機制",
              desc: "員工保密協議、與任何外部合作者的 NDA 全部簽好。這是所有行動的前置條件。特別是去找投資人 pitch 之前——VC 通常不簽 NDA，但 pitch deck 裡最敏感的技術細節，可以先在申請之後再揭露。",
              highlight: true,
            },
            {
              day: "Day 1–3",
              title: "IP 盤點",
              desc: "你有什麼？技術、品牌、設計、機密——全部列出來。",
            },
            {
              day: "Day 4–7",
              title: "競品 IP 地圖",
              desc: "主要競爭對手申請了什麼？在哪些市場有保護？專利資料庫是公開的，任何人都可以查。",
            },
            {
              day: "Day 8–14",
              title: "優先順序決策",
              desc: "什麼是核心資產？什麼市場最重要？預算怎麼分配？",
            },
            {
              day: "Day 15–30",
              title: "啟動申請",
              desc: "找專業人士，把優先級最高的開始走流程。",
            },
          ].map(({ day, title, desc, highlight }) => (
            <div
              key={day}
              className={`flex gap-4 p-4 rounded-sm ${highlight ? "bg-blue-gray/10 border-l-2 border-blue-gray" : "bg-bg-card"}`}
            >
              <div className="font-en font-semibold text-coral text-sm shrink-0 w-20">{day}</div>
              <div>
                <div className="font-semibold text-charcoal text-sm mb-1">{title}</div>
                <div className="text-warm-gray text-sm leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-charcoal text-white p-6 rounded-sm">
          <p className="font-semibold text-sm mb-2 text-blue-gray">一個問題，測試你的護城河強度：</p>
          <p className="text-white/90 leading-relaxed">
            「如果你明天公開所有的技術細節和品牌策略，三個月後，競爭對手可以複製出幾成？」
          </p>
          <p className="text-white/50 text-sm mt-3">如果答案超過六成，你的護城河還不夠深。</p>
        </div>

        <div className="mt-12 prose-article">
          <p>護城河不是做大了才建的東西。</p>
          <p>
            James Dyson 在第一個原型機還沒做完的時候，就開始在每一個技術突破上申請專利。他不是因為有錢才這麼做——他窮了很多年。他是因為他知道：沒有護城河，努力可以被合法複製。
          </p>
          <p>你的點子，值得被保護。但它保護不了自己。</p>
          <p className="font-medium text-charcoal">這件事，從第一天就是你的責任。</p>
        </div>
      </ArticleSection>

        </div>{/* end right column */}
      </div>{/* end grid */}

      {/* ── PARADOX + LONG-TERM PARTNER CTA ──────────────── */}
      <section className="bg-charcoal mt-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10 py-20">

          {/* Honest preamble */}
          <p className="text-xs font-en font-semibold tracking-widest text-white/30 uppercase mb-8">
            說一件真心話
          </p>

          <h2 className="text-white text-2xl md:text-3xl font-medium leading-snug mb-8">
            IP 策略的每一條建議，都有它的反面。
          </h2>

          {/* Paradox list */}
          <div className="space-y-3 mb-10">
            {[
              ["要早申請", "但申請太多會燒錢，申請錯方向等於白費"],
              ["不能太晚", "但太早申請有時候反而把技術細節攤在陽光下"],
              ["要多國布局", "但每個國家都申請，費用可以壓垮早期新創"],
              ["要節省費用", "但省錯地方，保護就會出現漏洞"],
            ].map(([left, right]) => (
              <div key={left} className="flex items-baseline gap-3 text-sm">
                <span className="text-coral font-medium shrink-0">{left}</span>
                <span className="text-white/30">—</span>
                <span className="text-white/50">{right}</span>
              </div>
            ))}
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-4">
            這些不是矛盾，是取捨。每一個決策點都取決於你的產品現在在哪個階段、競爭對手在哪裡布局、你手上的資源能撐多久。
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            問題是，每次去找顧問，都要從頭解釋一次你的商業邏輯、你的技術方向、還有那些說出去會尷尬的苦衷。
            然後換個顧問，又要再說一次。
          </p>
          <p className="text-white/80 text-sm font-medium leading-relaxed mb-12">
            有一個長期合作的 IP 夥伴——一個知道你產品生命週期每個轉折、記得你說過的秘密、
            可以在每個決策點直接討論「你的具體狀況」而不是「教科書答案」的人——
            這才是護城河真正的起點。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`https://mail.google.com/mail/?view=cm&to=hazel@eudaimonia-ip.com&su=${encodeURIComponent('IP 策略諮詢')}&body=${encodeURIComponent('你好 Hazel，\n\n我在閱讀「從點子到護城河」之後想進一步了解 IP 策略諮詢。\n以下是我的基本狀況：\n\n1. 公司 / 產品名稱：\n2. 目前階段（概念 / 開發中 / 已上市）：\n3. 主要市場（台灣 / 亞洲 / 歐美 / 其他）：\n4. 目前 IP 狀況（無 / 申請中 / 已有專利商標）：\n5. 最想解決的問題或最擔心的事：\n\n期待你的回覆！')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral text-white font-en font-semibold text-sm px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              跟我聊聊你的狀況 →
            </a>
            <span className="text-white/25 text-xs font-en">
              We read every message.
            </span>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
