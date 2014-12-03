---
layout: post
title: WriteMonkey 리뷰 10. txt파일 저장과 동기화 세팅
tags: [Writemonkey, Writing, Review] 
---

<div id="toc"><p class="toc_title"></p></div>

## 인코딩 설정

WriteMonkey와 같은 마크다운 텍스트 에디터를 사용하면서 작업 파일을 [드롭박스(Dropbox)](http://dropbox.com)에 TXT파일이나 md로 저장해서 스마트폰에서도 접근할 수 있도록 하면 더욱 글쓰기의 능률이 올라갑니다. 저는 드롭박스 안에 Notes 라는 폴더를 하나 만들어두고 거의 모든 글쓰기 TXT 파일을 해당 폴더 안에 폴더 - 폴더를 만들어가며 저장/관리하고 있어요.

WriteMonkey로 작업해서 저장해둔 txt 파일을 아이폰으로 접근해서 수정하고, 또 그 수정한 파일을 집에 돌아와서 WriteMonkey로 다시 열어 작업하는 일은 참 즐겁습니다. 그런데 좀 신경쓰이는 점이 있었는데 ...  생각보다 아이폰 텍스트 에디터 중 드롭박스 동기화를 지원하는 많은 앱들이 윈도우 환경을 고려하고 만들지 않는다는 겁니다. (당연한 건가..)

즉, 

1. xxx.txt 파일을 WriteMonkey에서 작업하고 저장
2. 다시 아이폰에서 텍스트에디터 앱으로 xxx.txt 파일을 열어 수정하고 이어쓰기
3. 다시 집에서 xxx.txt 파일을 열었을 때 .. 

위 3번 과정에서 갑자기 글이 깨져 있는 경우가 있습니다. 특히 WriteMonkey에서는 안 깨지는데 메모장 등으로 열면 이상한 문자가 보이는 경우인데요.  

![](http://farm3.staticflickr.com/2815/9966145086_1820514f72.jpg)

유명한 [Byword](https://itunes.apple.com/en/app/byword/id482063361?mt=8)의 경우 새로 수정한 부분의 줄이 바뀌는 부분에 이상한 기호가 들어가 있고요. 

![](http://farm6.staticflickr.com/5349/9966085275_66977ca804_z.jpg)

또 버그 때문에 말썽도 있었지만 그래도 무척 예쁘고 빠른 로딩 속도를 자랑하는 [Elements](http://goo.gl/2RwYH)의 경우 파일을 열었다 닫기만 해도 윈도우 PC에서 다시 해당 txt 파일을 메모장으로 열면 모든 줄바꿈 위치에 강제로 이상한 문자가 들어가고 모든 글이 한 줄로 이어붙어져 있습니다..

위와 같은 문제는 아이폰/아이패드/Mac 등 iOS의 유닉스 계열 운영체제가 텍스트 본문의 줄바꿈할 때 사용하는 방식과 Windows 계열의 텍스트 본문 줄바꿈 방법에 차이가 있기 때문에 발생합니다. 의도치 않게 이렇게 파일이 엉망진창이 되어 보이면 윈도우에서 더블클릭해서 메모장으로 확인하는 일은 포기해야 하고 좀 기분이 좋지 않죠 ;;; 

![](http://farm6.staticflickr.com/5326/9966116774_df8cdab1b1_z.jpg)

보기 싫다고 메모장으로 하나하나 수정하려고 하기보다는 WriteMonkey에서 다시 열었다가 닫으면 간단히 문제가 해결될 수 있습니다. 

![](http://farm6.staticflickr.com/5326/9966116774_df8cdab1b1.jpg)
△ WriteMonkey로 열었다가 닫은 후, 메모장으로 다시 열었을 때


## WriteMonkey의 파일포맷 설정

![](http://farm6.staticflickr.com/5548/9966144866_19a49858eb.jpg)

우선 인코딩을 기본 UTF-8(Recommended)로 고정해주세요. 텍스트 인코딩에 따른 용량 차이는 사실 미미하기도 하고요, 대세이니 통일하시길! 또한 다른 인코딩으로 제작된 파일도 무조건 UTF-8로 다시 저장하도록 Always save with selected encoding 에 체크합니다. 

두 번째로 Include BOM when saving UTF-8 files 옵션은 끄는 걸 추천합니다. BOM에 대해서는 [mwultong님의 블로그 : 유니코드의 BOM이란?](http://mwultong.blogspot.com/2006/05/qna-unicode-bom-byte-order-mark.html) 을 참고해주시고요. 또한 윈도우 메모장이 BOM을 어떻게 다루는지는 [wystan님의 UTF-8 인코딩에서의 BOM(Byte Order Mark) 문제](http://blog.wystan.net/2007/08/18/bom-byte-order-mark-problem)도 읽어보시면 좋습니다. 

결론적으로 BOM(Byte Order Mark)이란 텍스트 에디터에서도 보이지 않는 숨겨진 문자로서 유니코드에도 여러가지 종류가 있는데 유니코드 파일의 종류를 알 수 있도록 표시하는 문자열을 말하구요. 스마트폰과 Mac, PC를 오가게 되는 경우 가급적 윈도우 메모장보다는 전문적인 텍스트 에디터로만 파일을 건드리는 게 좋다는 것입니다. 

또 여러가지 점을 검토했을 때 "BOM은 UTF-8 문서 작성 시 없는 게 좋다"는 게 결론입니다. 

세 번째로 Save with Unix line breaks인데요. Mac 의 줄바꿈 문자와 완벽히 호환되도록 기호를 삽입해서 저장하는 것을 뜻합니다. 이 칸에 체크해도 편집할 때는 해당 Unix line breaks 가 보이는 건 아니고, 메모장으로 열면 안 보이던 유닉스 줄바꿈 문자가 들어가있는 걸 볼 수 있죠. 

![](http://farm6.staticflickr.com/5526/9966144826_7acf86f4dc.jpg)   
△ WriteMonkey에서 Unix line breaks를 넣어 저장 후, 다시 메모장으로 열었을 때   


윈도우 호환성을 높이기 위해 체크를 하지 않는 걸 추천합니다. 

여기까지 하면 간혹 아이폰의 다른 앱에서 txt 파일을 건드리면서 유닉스 줄바꿈 문자가 들어갔다고 하더라도 단지 WrieMonkey에서 열었다가 저장하고 닫는 동작만 수행해도 Unix 줄바꿈 문자가 모두 제거되고 txt 파일이 정리되는 효과를 볼 수 있습니다. 


## 윈도우 PC와 함께 사용하기 좋은 아이폰 텍스트 에디터?

![](http://farm3.staticflickr.com/2819/9966213693_f1642e8d58.jpg)

![](http://farm4.staticflickr.com/3800/9966116274_f1810d0fb1.jpg)


아이폰 앱 중에서도 윈도우 PC 환경을 고려해주는 고마운 텍스트 에디터들이 있습니다. 드롭박스 싱크가 가능하고, 마크다운을 지원하는 텍스트에디터 중 제가 가장 오랫동안 사용하고 있는 것은 [Nebulous Notes(3.99달러)](https://itunes.apple.com/us/app/nebulous-notes/id375006422?mt=8)입니다. 디자인은 좀 구리고 ;;; 뭔가 아이콘이라든가 좀 촌스러운데 ;; 그래도 버그도 적은 편이고 기능도 꽤 강력해요. 손가락 두 개로 폰트 크기도 줌인/아웃 가능하고 드롭박스 모든 폴더 접근 + 원하는 파일만 동기화, 파일 이동과 복사가 자유롭다든가, 에버노트 전송, 마크다운 지원에 custom css 까지 정말 강력합니다. 

특히 More Option... 버튼을 통해 고급옵션으로 접근해서 Notepad/CRLF lines 에 체크해주시면 모든 txt파일을 다룰 때 Windows PC 환경에 적합하게 Unix 개행 문자를 넣지 않기 때문에 더욱 궁합이 좋아집니다. 물론 인코딩은 UTF-8에 자동 싱크도 켜주시구요. 

기타 정말 많은 앱들을 테스트해보았는데 거의 윈도우 환경을 배려한 에디터들은 찾기 힘든 실정이라고 봐야 하고요... [Notesy(4.99달러)](https://itunes.apple.com/us/app/notesy-for-dropbox/id386095500?mt=8) 정도가 Windows Freindly 옵션을 통해 윈도우 PC에서도 텍스트 파일 활용에 무리가 없도록 배려하고 있습니다. 

하지만 뭐, 사실 '메모장' 쓰는 일만 포기하고... 이 줄바꿈 문자에 대한 집착만 버리면 ^^ 아이폰/아이패드 연동 텍스트 앱 중에 정말 미려하고 성능도 우수한 앱들이 많이 있으니 사실 별 문제가 아니라고 생각할 수도 있을 거 같네요. 


*(2013년 9월말에 쓰고, 2014년 12월에 다시 고쳐썼습니다.)*
