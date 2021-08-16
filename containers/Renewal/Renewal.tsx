import { useState } from 'react';
import { Badge, Overview, Checkbox, NavigationBar } from 'components';
import {
  AwardCard,
  ImageCard,
  SelfCard,
  RealTimeReviewCard,
  ReviewCard,
} from 'components/Card';
import { ViewAll } from 'components/ViewAll/ViewAll';
import { GNBLayout } from 'components/Layout';
import { useThemeObserver } from 'hooks/useThemeObserver';
import classNames from 'classnames/bind';
import styles from './Renewal.module.scss';

const cx = classNames.bind(styles);

export const Renewal = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [storyRef]: any = useThemeObserver(setNavNumber, 1);
  const [classRef]: any = useThemeObserver(setNavNumber, 2);
  const [reviewRef]: any = useThemeObserver(setNavNumber, 3);
  return (
    <GNBLayout>
      <div className={cx('wrap')}>
        <section className={cx('info-section')}>
          <img
            src="/assets/details_image.png"
            className={cx('info-image')}
            alt="temp"
          />
          <div className={cx('info-card')}>
            <h1 className={cx('h1')}>
              보호자님과 반려견의 즐겁고 풍요로운 삶을 위해 최선을 다하겠습니다!
            </h1>
            {Array.from(Array(3), (_, i) => (
              <Badge key={i} label="입양초기교육" />
            ))}
            <div className={cx('info-card-content')}>
              <div className={cx('info-content-inner')}>
                <div className={cx('info')}>
                  <h3 className={cx('h3')}>경력</h3>
                  <h1 className={cx('h1')}>4년</h1>
                </div>
                <div className={cx('info')}>
                  <h3 className={cx('h3')}>대표수업</h3>
                  <h1 className={cx('h1')}>입양초기 기초교육</h1>
                </div>
              </div>
            </div>
            <div className={cx('info-card-content')}>
              <div className={cx('info-content-inner', 'single')}>
                <div className={cx('info')}>
                  <h3 className={cx('h3')}>대표 경력</h3>
                  <h1 className={cx('h1')}>
                    (현) &apos;마이콩 컴퍼니&apos; 대표
                  </h1>
                </div>
              </div>
            </div>
            <div className={cx('info-card-content')}>
              <div className={cx('info-content-inner', 'single')}>
                <h3 className={cx('h3')}>수업료</h3>
                <div className={cx('info', 'double')}>
                  <div className={cx('price')}>
                    <h4 className={cx('h4')}>화상교육 (60분)</h4>
                    <h1 className={cx('h1')}>70,000원</h1>
                  </div>
                  <div className={cx('price')}>
                    <h4 className={cx('h4')}>화상교육 (60분)</h4>
                    <h1 className={cx('h1')}>70,000원</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NavigationBar position={navNumber} />
        <section className={cx('details-section')}>
          <article className={cx('info-inner')}>
            <div ref={storyRef}>
              <Overview
                title="안녕하세요.<br/>마이콩 홍석민입니다."
                content="안녕하세요 보호자님! 반려견 지도사 마이콩 입니다. 어릴적 반려견을 너무 기르고 싶어서 반대하시는 부모님을 7년간 설득했고, 결국 반려견 한마리를 입양하게 되었습니다. 그 아이는 11마리 속에서 방치된채 자라던 아이였습니다. 그래서 인지 어떤 사람에게든 애정을 받으려 항상 노력 하던 아이입니다. 우리 집에 오면 더 잘 살겠지 하는 마음으로 아이를 입양했는데, 강아지를 공부하지 않았고 너무 몰랐습니다. 결국 분리불안에, 헛 짖음, 산책 트라우마, 공격성 까지 다 가지게 되었습니다. 처음엔 아이의 문제라는 생각을 했는데, 공부를 할수록 저의 잘못이라는 것을 알게 되었고, 미안한 마음에 반려견을 공부하기 시작했습니다. 훈련소로 들어가서 한국애견협회의 자격증을 취득했으나, 제가 배운 훈련법은 많은 체벌을 가하고, 반려견들의 심리를 불안하게 하는 교육이었습니다. 그 방법으로 훈련을 하기엔 마음이 편치 않아서 외국의 방법을 공부하게 되었고, 결국엔 긍정강화의 대모인 'Karen Pryor'의 아카데미에서 현존하는 최고의 긍정강화 방법, 그리고 클리커 트레이닝, 수업 방법등을 배우며 Karen pryor academy - Professional Dog Trainer가 되었습니다. 현재는 저의 첫 강아지에게 미안한 마음을 원동력으로 보호자님들과 반려견들의 삶이 럭셔리 해지도록 방문교육을 하고 있습니다."
              />
              <div className={cx('ready-inner')}>
                <h2 className={cx('h2')}>열심히 준비했어요!</h2>
                <div className={cx('ready-inner-content')}>
                  {Array.from(Array(4), (_, i) => (
                    <AwardCard
                      key={i}
                      src="/assets/award.png"
                      title="반려견 지도사 자격증"
                    />
                  ))}
                </div>
              </div>
              <div className={cx('introduce-inner')}>
                {Array.from(Array(3), (_, i) => (
                  <SelfCard
                    key={i}
                    src="/assets/self.png"
                    title="제가 추구하는 ‘비전’입니다"
                    content="긍정강화 교육의 권위자 ‘카렌 프라이어’의 정확한 긍정강화 교육으로 아이들과 즐거운 교육을 진행합니다. 보호자님과 반려견의 더 행복한 반려 라이프를 통해 삶의 질을 높이기 위한 교육을 진행합니다."
                  />
                ))}
              </div>
            </div>
            <div className={cx('class-inner')} ref={classRef}>
              <h2 className={cx('h2')}>
                마이콩 선생님과 반려견이
                <br />
                함께하는 수업입니다!
              </h2>
              <div className={cx('class-checkbox')}>
                <Checkbox content="화상 교육" />
                <Checkbox content="방문 교육" />
              </div>
              <div className={cx('class-inner-content')}>
                {Array.from(Array(9), (_, i) => (
                  <ImageCard src="/assets/class.png" />
                ))}
              </div>
            </div>
            <div className={cx('review-inner')} ref={reviewRef}>
              <h2 className={cx('h2')}>
                마이콩 선생님과 함께한
                <br />
                다른 견주분들의
                <br />
                리뷰를 확인해보세요
              </h2>
              <div className={cx('card-inner')}>
                <div className={cx('satisfaction-card')}>
                  <div className={cx('satisfaction-card-inner')}>
                    <p className={cx('satisfaction-card-title')}>고객 만족도</p>
                    <p className={cx('satisfaction-card-score')}>5.0</p>
                    <img
                      className={cx('icon')}
                      src="/assets/star.svg"
                      alt="Star"
                    />
                  </div>
                  <div className={cx('satisfaction-card-inner')}>
                    <p className={cx('satisfaction-card-title')}>교육 진행</p>
                    <p className={cx('satisfaction-card-score')}>46건</p>
                    <p className={cx('satisfaction-card-subtitle')}>
                      방문 30건 / 화상 16건
                    </p>
                  </div>
                </div>
                <div className={cx('statistic-card')}>
                  {Array.from(Array(4), (_, i) => (
                    <div key={i} className={cx('statistic-card-inner')}>
                      <p className={cx('statistic-card-title')}>
                        입양초기 기초교육
                      </p>
                      <div className={cx('progress-bar')}>
                        <div
                          className={cx('progress-bar-inner')}
                          style={{ width: '50%' }}
                        ></div>
                      </div>
                      <p className={cx('statistic-card-score')}>3회</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx('filter')}>
                <button className={cx('active')}>최근등록순</button>
                <button>최고평점순</button>
                <button>최저평점순</button>
              </div>
              <div className={cx('reivew-list')}>
                <ViewAll limit={5}>
                  {Array.from(Array(8), (_, i) => (
                    <ReviewCard />
                  ))}
                </ViewAll>
              </div>
            </div>
          </article>
          <article className={cx('realtime-inner')}>
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
            <div className={cx('real-review')}>
              <h4 className={cx('h4')}>실시간 후기</h4>
              <ViewAll limit={3}>
                {Array.from(Array(6), (_, i) => (
                  <RealTimeReviewCard />
                ))}
              </ViewAll>
            </div>
            <div className={cx('real-image')}>
              {Array.from(Array(9), (_, i) => (
                <ImageCard texthide />
              ))}
            </div>
          </article>
        </section>
      </div>
    </GNBLayout>
  );
};
