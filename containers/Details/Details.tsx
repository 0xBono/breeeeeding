import _ from 'lodash';
import { Badge, Overview, NavigationBar, Header, Checkbox } from 'components';
import { SelfCard, AwardCard, ImageCard, ReviewCard, RealTimeReviewCard } from 'components/Card';
import { Prepare, Self, Class, Review } from './contents';
import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

export const Details = () => {
  return (
    <Fragment>
      <Header />
      <section className={cx('wrap')}>
        <section className={cx('details')}>
          <img src="/assets/temp_img.svg" alt="" className={cx('details-image')} />
          <div className={cx('details-inner')}>
            <h1 className={cx('details-title')}>보호자님과 반려견의 즐겁고 풍요로운 삶을 위해 최선을 다하겠습니다!</h1>
            <Badge label="입양초기교육" />
            <Badge label="산책교육" />
            <Badge label="배변교육" />
            <div className={cx('details-info')}>
              <div className={cx('details-info-inner')}>
                <h2 className={cx('details-info-title')}>경력</h2>
                <h1 className={cx('details-info-highlight')}>4년</h1>
              </div>
              <div className={cx('details-info-inner')}>
                <h2 className={cx('details-info-title')}>대표수업</h2>
                <h1 className={cx('details-info-highlight')}>입양초기 기초교육</h1>
              </div>
            </div>
            <div className={cx('details-info')}>
              <div className={cx('details-info-inner')}>
                <h2 className={cx('details-info-title')}>대표 경력</h2>
                <h1 className={cx('details-info-highlight')}>‘마이콩 컴퍼니’ 대표</h1>
              </div>
            </div>
            <div className={cx('details-info')}>
              <div className={cx('details-info-inner')}>
                <h2 className={cx('details-info-title')}>수업료</h2>
                <h1 className={cx('details-info-subtitle')}>화상교육 (60분)</h1>
                <h1 className={cx('details-info-highlight')}>70,000원</h1>
              </div>
            </div>
          </div>
        </section>
        <NavigationBar />
        <section className={cx('divide-section')}>
          <section className={cx('left-section')}>
            <Overview
              content="안녕하세요 보호자님! 반려견 지도사 마이콩 입니다. 
어릴적 반려견을 너무 기르고 싶어서 반대하시는 부모님을 7년간 설득했고, 결국 반려견 한마리를 입양하게 되었습니다. 그 아이는 11마리 속에서 방치된채 자라던 아이였습니다. 그래서 인지 어떤 사람에게든 애정을 받으려 항상 노력 하던 아이입니다. 우리 집에 오면 더 잘 살겠지 하는 마음으로 아이를 입양했는데, 강아지를 공부하지 않았고 너무 몰랐습니다. 결국 분리불안에, 헛 짖음, 산책 트라우마, 공격성 까지 다 가지게 되었습니다. 처음엔 아이의 문제라는 생각을 했는데, 공부를 할수록 저의 잘못이라는 것을 알게 되었고, 미안한 마음에 반려견을 공부하기 시작했습니다. 훈련소로 들어가서 한국애견협회의 자격증을 취득했으나, 제가 배운 훈련법은 많은 체벌을 가하고, 반려견들의 심리를 불안하게 하는 교육이었습니다. 그 방법으로 훈련을 하기엔 마음이 편치 않아서 외국의 방법을 공부하게 되었고, 결국엔 긍정강화의 대모인 'Karen Pryor'의 아카데미에서 현존하는 최고의 긍정강화 방법, 그리고 클리커 트레이닝, 수업 방법등을 배우며 Karen pryor academy - Professional Dog Trainer가 되었습니다. 현재는 저의 첫 강아지에게 미안한 마음을 원동력으로 보호자님들과 반려견들의 삶이 럭셔리 해지도록 방문교육을 하고 있습니다."
            />
            <section className={cx('prepare-section')}>
              <p className={cx('section-title')}>열심히 준비했어요!</p>
              <div className={cx('prepare-inner')}>
                {Prepare.map((item, key) => (
                  <AwardCard key={key} src={item.prepare_img} title={item.prepare_title} />
                ))}
              </div>
            </section>
            <section className={cx('self-section')}>
              {Self.map((item) => (
                <SelfCard key={item.id} src={item.self_img} title={item.self_title} content={item.self_content} />
              ))}
            </section>
            <section className={cx('class-section')}>
              <p className={cx('section-title')}>
                마이콩 선생님과 반려견이
                <br />
                함께하는 수업입니다!
              </p>
              <div className={cx('class-checkbox')}>
                <Checkbox content="화상 교육" />
                <Checkbox content="방문 교육" />
              </div>
              <div className={cx('class-inner')}>
                {Class.map((item, key) => (
                  <ImageCard key={key} />
                ))}
              </div>
            </section>
            <section className={cx('review-section')}>
              <p className={cx('section-title')}>
                마이콩 선생님과 함께한
                <br />
                다른 견주분들의
                <br />
                리뷰를 확인해보세요
              </p>
              <div className={cx('card-inner')}>
                <div className={cx('satisfaction-card')}>
                  <div className={cx('satisfaction-card-inner')}>
                    <p className={cx('satisfaction-card-title')}>고객 만족도</p>
                    <p className={cx('satisfaction-card-score')}>5.0</p>
                    <img className={cx('icon')} src="/assets/star.svg" alt="Star" />
                  </div>
                  <div className={cx('satisfaction-card-inner')}>
                    <p className={cx('satisfaction-card-title')}>교육 진행</p>
                    <p className={cx('satisfaction-card-score')}>46건</p>
                    <p className={cx('satisfaction-card-subtitle')}>방문 30건 / 화상 16건</p>
                  </div>
                </div>
                <div className={cx('statistic-card')}>
                  <div className={cx('statistic-card-inner')}>
                    <p className={cx('statistic-card-title')}>입양초기 기초교육</p>
                    <div className={cx('progress-bar')}>
                      <div className={cx('progress-bar-inner')} style={{ width: '50%' }}></div>
                    </div>
                    <p className={cx('statistic-card-score')}>3회</p>
                  </div>
                  <div className={cx('statistic-card-inner')}>
                    <p className={cx('statistic-card-title')}>분리불안 교육</p>
                    <div className={cx('progress-bar')}>
                      <div className={cx('progress-bar-inner')} style={{ width: '30%' }}></div>
                    </div>
                    <p className={cx('statistic-card-score')}>3회</p>
                  </div>
                </div>
              </div>
              <div className={cx('filter')}>
                <button className={cx('active')}>최근등록순</button>
                <button>최고평점순</button>
                <button>최저평점순</button>
              </div>
              <div className={cx('review-inner')}>
                {Review.map((item, key) => (
                  <ReviewCard key={key} />
                ))}
              </div>
            </section>
          </section>
          <section className={cx('right-section')}>
            <div className={cx('mini-satisfaction-card')}>
              <div className={cx('mini-satisfaction-card-inner')}>
                <p className={cx('inner-title')}>평균 고객만족도</p>
                <p className={cx('inner-score')}>5.0</p>
              </div>
              <div className={cx('mini-satisfaction-card-inner')}>
                <p className={cx('inner-title')}>최근 작성된 리뷰</p>
                <p className={cx('inner-score')}>3</p>
              </div>
              <div className={cx('mini-satisfaction-card-inner')}>
                <p className={cx('inner-title')}>전체 리뷰</p>
                <p className={cx('inner-score')}>5</p>
              </div>
            </div>
            <section className={cx('real-review-section')}>
              <p className={cx('section-subtitle')}>실시간 후기</p>
              <RealTimeReviewCard />
              <RealTimeReviewCard />
              <RealTimeReviewCard />
            </section>
            <section className={cx('real-picture-section')}>
              <p className={cx('section-subtitle')}>실시간 사진</p>
              <div className={cx('picture-inner')}>
                {Class.map((item, key) => (
                  <ImageCard key={key} texthide small />
                ))}
              </div>
            </section>
          </section>
        </section>
      </section>
    </Fragment>
  );
};
