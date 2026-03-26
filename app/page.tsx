import { Timeline } from "@/components/timeline"

export default function Home() {
  // Sample timeline data
  const timelineData = [
    {
      title: "1743 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">God chooses Abraham and his family</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Genesis 17:2</p>
            <p>And I will make my covenant between me and thee, and will multiply thee exceedingly.</p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Abraham's family were all Hebrews. Traditionally, the word Hebrew (עִבְרִי) is from an ancestral name Eber
            (Genesis 10:21), but literally means "one from the other side," perhaps in reference to the River Euphrates
            (Joshua 24:3). Thus he is known as Abraham the Hebrew (Genesis 14:13).
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Only a later sub-sect of this family became known as Jews – those belonging to the House of Judah – the
            tribes Judah, Benjamin, and Levi.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            None of the other 10 tribes are considered Jewish.
          </p>
        </div>
      ),
    },
    {
      title: "1505 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">Jacob blesses his grandsons</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Genesis 48:19</p>
            <p>
              And his father refused, and said, I know it, my son, I know it: he also shall become a people, and he also
              shall be great: but truly his younger brother shall be greater than he, and his seed shall become a
              multitude of nations.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Jacob blesses the two sons of Joseph – Ephraim and Manasseh. These two grandchildren become the largest
            tribes in the House of Israel.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            The phrase "multitude of nations" in Hebrew is meló gowy (מְלֹֽא־הַגּוֹיִֽם) and is literally translated as
            "fullness of Gentiles".
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Jacob essentially prophecies that the House of Israel will become Gentiles. This suggests that an event will
            sever 10 tribes from the whole of Israel losing their status as part of God's people.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">Paul references this in Romans 11:25.</p>
        </div>
      ),
    },
    {
      title: "1313 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">A marriage convenant is made</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Isaiah 54:5</p>
            <p>
              For thy Maker is thine husband; the Lord of hosts is his name; and thy Redeemer the Holy One of Israel;
              The God of the whole earth shall he be called.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-8">
            As witnessed by the prophet Isaiah, the Jewish nation today recognizes the event at Mt. Sinai as a wedding
            between God and His people, Israel – all 12 tribes.
          </p>
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">
            One law for both Israel and Gentiles
          </h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Exodus 12:49</p>
            <p>One law shall be to him that is homeborn, and unto the stranger that sojourneth among you.</p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            While some Jews suggest Proselytes are only accountable to the seven Noahide laws, and Christians believe
            the law only applies to Jews, the fact remains that there is only ONE law for both Israel and believing
            Gentiles.
          </p>
        </div>
      ),
    },
    {
      title: "869 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">King David unifies the 12 tribes</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>2 Samuel 5:5</p>
            <p>
              In Hebron he reigned over Judah seven years and six months: and in Jerusalem he reigned thirty and three
              years over all Israel and Judah.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            While in 877 BCE David becomes king of Judah in Hebron, he officially becomes king of Israel (all 12 tribes)
            in Jerusalem in 869 BCE.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">Judah and Israel are united as one kingdom.</p>
        </div>
      ),
    },
    {
      title: "797 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">The 12 tribes divide into 2 houses</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>1 Kings 12:20-21</p>
            <p>
              And it came to pass, when all Israel heard that Jeroboam was come again, that they sent and called him
              unto the congregation, and made him king over all Israel: there was none that followed the house of David,
              but the tribe of Judah only.
            </p>
            <p>
              And when Rehoboam was come to Jerusalem, he assembled all the house of Judah, with the tribe of
              Benjamin...
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            As spoken by the prophet Ahijah in 1 Kings 11:30-31, after Solomon's death the kingdom divides into two
            houses.
          </p>
          <h5 className="font-semibold text-black dark:text-white mb-2">House of Israel</h5>
          <ul className="list-disc pl-8 mb-4">
            <li>The Northern 10 tribes</li>
            <li>Reuben, Simeon, Issachar, Zebulun, Dan, Naphtali, Gad, Asher, Ephraim, and Manasseh</li>
            <li>Also referenced as: House of Joseph (1 Kings 11:28), Ephraim (Psalm 78:67), Israel, Samaria</li>
            <li>First ruled by King Jeroboam</li>
          </ul>
          <h5 className="font-semibold text-black dark:text-white mb-2">House of Judah</h5>
          <ul className="list-disc pl-8 mb-4">
            <li>The Southern 3 tribes</li>
            <li>Judah, Benjamin, and a remnant of Levites</li>
            <li>Also referenced as: Judah (1 Kings 12:27), The Jews (2 Kings 16:6)</li>
            <li>First ruled by King Rehoboam</li>
          </ul>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            The etymology of the word "Jew" is strictly rooted in "Judah" which further enforces the point that only the
            House of Judah were considered Jews.
          </p>
        </div>
      ),
    },
    {
      title: "556 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">
            House of Israel falls to the captivity of Assyria
          </h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md  text-violet-700 dark:text-violet-400">
            <p>2 Kings 17:6</p>
            <p>
              In the ninth year of Hoshea the king of Assyria took Samaria, and carried Israel away into Assyria, and
              placed them in Halah and in Habor by the river of Gozan, and in the cities of the Medes.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            10 tribes were taken into captivity by Assyria. These 10 tribes never returned to Israel prior to the advent
            of Yeshua. They are considered among scholars as the 10 Lost Tribes.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Ezekiel speaks of them being scattered among the countries (Ezekiel 11:16). Hosea states they are mixed
            among the people. They will live among the Gentiles and have gone up to Assyria (Hosea 7:8 & 8:8-9).
            Jeremiah adds that Israel is a scattered sheep (Jeremiah 50:17). And finally, Josephus, a first-century
            Roman-Jewish historian, wrote that "ten tribes are beyond Euphrates till now; and are an immense multitude,
            and not to be estimated by numbers."
          </p>
        </div>
      ),
    },
    {
      title: "463 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">
            God divorces the House of Israel – 10 tribes
          </h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-red-700 dark:text-red-400">
            <p>Jeremiah 3:8</p>
            <p>
              And I saw, when for all the causes whereby backsliding Israel committed adultery I had put her away, and
              given her a bill of divorce; yet her treacherous sister Judah feared not, but went and played the harlot
              also.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Due to spiritual adultery (1 Kings 12:28), God divorced the 10 tribes of House of Israel. The remaining
            three tribes (Judah, Benjamin, and Levi) were not divorced, and are still married to God. These are the only
            remaining identifiable tribes today known as the Jewish people. The other 10 tribes were scattered and
            assimilated into the Gentile regions (Jeremiah 10:1 & 21, Amos 9:9) just as Jacob prophesied upon his two
            grandchildren.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            God's law of divorce (Deuteronomy 24:1-4) does not allow the husband to remarry his divorced wife, even if
            they both desire to remarry each other. The divorce has made her unclean. But there is an exception – the
            death of the former husband can release the woman from being bound under the letter of the law.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">Paul references this in Romans 7:1-4.</p>
        </div>
      ),
    },
    {
      title: "The Promise",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">
            God promises redemption to the House of Israel
          </h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Ezekiel 34:11-12</p>
            <p>For thus saith the Lord God; Behold, I, even I, will both search my sheep, and seek them out.</p>
            <p>
              As a shepherd seeketh out his flock in the day that he is among his sheep that are scattered; so will I
              seek out my sheep, and will deliver them out of all places where they have been scattered in the cloudy
              and dark day.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            The scattered lost sheep are the House of Israel.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">Ezekiel 37:1-11</p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              The dry bones in Ezekiel's prophecy represent the House of Israel. They were dead, but have been made
              alive again.</p>
          <p className="text-neutral-700 dark:text-neutral-300">Ezekiel 37:15-27</p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          Ezekiel also prophecies about the stick of Joseph (House of Israel) being joined again with
              the stick of Judah (House of Judah) and they will be one. Paul references this in
              Romans 11:24.</p>
              <p className="text-neutral-700 dark:text-neutral-300">Hosea 2:14-23</p>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">The children represent both the House of Israel and the House of Judah. In the end, God shall say to them who were not His people (House of Israel), you are my people.</p>
           <p className="text-neutral-700 dark:text-neutral-300">Isaiah 14:1</p>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">Isaiah recognized a time when the mercy of God would allow the House of Israel to return again.</p>
            <p className="text-neutral-700 dark:text-neutral-300">Jeremiah 31:31</p>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">God promises a renewed covenant with the House of Judah and the House of Israel.</p>
            <p className="text-neutral-700 dark:text-neutral-300">Zechariah 8:13</p>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">God explicitly calls out the salvation of both the House of Judah and the House of Israel.</p>
            <p className="text-neutral-700 dark:text-neutral-300">Micah 2:12</p>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">Micah prophesies the gathering of the sheep of Israel.</p>
        </div>
      ),
    },
    {
      title: "423 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">House of Judah falls to the captivity of Babylon</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>2 Kings 24:14</p>
            <p>
              And he carried away all Jerusalem, and all the princes, and all the mighty men of valour, even ten thousand captives, and all the craftsmen and smiths: none remained, save the poorest sort of the people of the land.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            The remaining 3 tribes were taken into captivity by Babylon. The verse documents the King of Babylon, Nebuchadnezzar's victory over Judah.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">The captivity into Babylon is the official Jewish recognition of the beginning of the Jewish Diaspora. Because the 10 northern tribes were divorced, they were not considered part of the whole of Israel. The captivity of the 10 tribes into Assyria is not recognized as a part of the diaspora – only the fall of the House of Judah.</p>
        </div>
      ),
    },
    {
      title: "371 BCE",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">House of Judah returns to build the 2nd temple</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Ezra 1:5</p>
            <p>
              Then rose up the chief of the fathers of Judah and Benjamin, and the priests, and the Levites, with all them whose spirit God had raised, to go up to build the house of the Lord which is in Jerusalem.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Only the 3 tribes that were taken into Babylon returned to the land of Israel: Judah, Benjamin, and Levi. These are the only identifiable tribes today known altogether as the Jewish people. These three tribes rebuilt the 2nd temple and formed the factions of Pharisees and Sadduccess during the time of Yeshua.
          </p>
        </div>
      ),
    },
    {
      title: "The Messiah",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">Yeshua dies for the lost sheep of the House of Israel</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Matthew 15:24</p>
            <p>
              But he answered and said, I am not sent but unto the lost sheep of the house of Israel.
            </p>
          </div>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>John 10:7 & 15</p>
            <p>
              [...] I am the door of the sheep.</p>
            <p>[...] and I lay down my life for the sheep.
            </p>
          </div>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Romans 7:4</p>
            <p>
              Wherefore, my brethren, ye also are become dead to the law by the body of Christ; that ye should be married to another, even to him who is raised from the dead, that we should bring forth fruit unto God.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            The single most important purpose of the Messiah is to unite His kingdom. Everyone looked for the Messiah to restore Israel's kingdom on earth. But 10 tribes were still divorced from God. The law of divorce states that the only way the woman can be freed from the divorce is if her first husband dies. Yeshua came with all the authority of God (Matthew 28:18), as God's only begotten son, to die and release the House of Israel from the letter of the law of divorce. The promise is fulfilled.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Yeshua died for the "sins of many" as stated in Isaiah 53:11-12. These were the sins outlined in Hebrews 9:15 being the "transgressions that were under the first covenant." It was the sin of spiritual adultery under the first covenant that caused the House of Israel to be divorced and required Yeshua's death for their redemption.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Without Yeshua's death, there is no redemption. Without Yeshua's resurrection, there is no hope of a renewed marriage and united kingdom. It is only through Him that all things are made possible.
          </p>
        </div>
      ),
    },
    {
      title: " ",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm tracking-wide mb-8 max-w-lg">
          <h4 className="text-lg font-semibold mb-8 text-black dark:text-white">About this work</h4>
          <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 tracking-normal mb-8 font-mono text-md text-violet-700 dark:text-violet-400">
            <p>Mishneh Torah, Kings and Wars</p>
            <p>
              The King Messiah will arise and re-establish the monarchy of David as it was in former times. He will
              build the Sanctuary and gather in the dispersed of Israel.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            To explain Yeshua as the Messiah, many might begin in the New Testament. However, the apostles were able to
            justify Yeshua as the Messiah by way of the Tanakh only. To do this, one must be intimately familiar
            with the Tanakh. Yeshua is not simply a Christian Messiah, He is the Messiah and King of Israel.
            He has re-established the monarchy of David and unified the 12 tribes. He has gathered in the dispersed of
            Israel, the lost 10 tribes.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            This timeline aligns the Messiah with a purpose that is accurate to Biblical history and prophecy, meets the
            expectations of the Jewish people (House of Judah), and establishes Yeshua as the redeemer of the Israelite
            Gentiles (House of Israel).
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            This work is meant to help unify the Jewish and Christian perspective of the Messiah, and to reveal the
            Messiah as the Jewish man, the Son of God, Yeshua.
          </p>
        </div>
      ),
    },
  ]

  return (
    <main className="min-h-screen">
      <Timeline data={timelineData} />
    </main>
  )
}
