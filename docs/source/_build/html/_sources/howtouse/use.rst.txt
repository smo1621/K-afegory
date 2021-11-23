##################
How to use
##################

Korean Sentiment Lexicon
======

기존의 감성 사전은 기본적인 감정 표현을 중심적으로 표현하여 SNS나 리뷰 데이터의 긍부정을 측정하기에는 적합하지 않음

카페 도메인에서 많이 쓰이는 단어들도 반영하지 못함

따라서 우리는 카페 리뷰의 긍부정을 측정하기 위한 감정 사전을 구축하고자 함


감성 사전 구축에 사용된 데이터
  * 네이버 지도의 방문자 리뷰
  * `위키백과 신조어 <https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EC%9D%B8%ED%84%B0%EB%84%B7_%EC%8B%A0%EC%A1%B0%EC%96%B4_%EB%AA%A9%EB%A1%9D>`_
  * `위키백과 이모티콘 <https://ko.wikipedia.org/wiki/%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98>`_
  * `감정 단어 사전 0603 <http://datascience.khu.ac.kr/board/bbs/board.php?bo_table=05_01&wr_id=91>`_


.. csv-table:: Lexicon
  :header: "word", "score"
  :widths: 10, 10

    "good",96
    "bad",12

How to use Lexicon
---------------------------
  1. Sentiment_analysis.py 파일과 sentiment_docs.csv 파일을 같은 경로에 저장
  2. Sentiment_analysis.py 파일을 실행
  3. 각 문장의 감정 점수를 출력


`Download <https://github.com/whatsbirddd/K-afegory-Opinion-Mining-by-Sentiment-Analysis-Based-on-Naver-Blog>`_
    

