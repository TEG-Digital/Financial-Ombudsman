import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Complaints we help with',
    paragraph: 'We can help with complaints about most kinds of financial products and services provided in or from the UK – from debt collection and payday loans to insurance and mortgages –  the types of complaint we can help with are listed below.<br/><br/>When you get in touch, we’ll let you know if the business is one we cover, and if the complaint is about something we can look at.<br/><br/>You can also use our complaint checker to find out if we can help with your complaint.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01-bank.gif')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Banking and payments
                    </h4>
                  <p className="m-0 text-sm">
                    We see a variety of complaints from consumers about banking and payment services, for example current accounts or regular payments like direct debits, or where an IT problem has meant consumers can’t access their accounts. We look at the facts and circumstances of each individual complaint. We listen impartially to both you and the business when deciding what's fair and reasonable in the circumstances.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Fraud and scams
                    </h4>
                  <p className="m-0 text-sm">
                    People typically bring their complaint to us when their bank refuses to refund the money that’s been lost. The range of complaints we see is constantly evolving as fraudsters develop new – and increasingly clever – methods. Some frauds and scams can be very convincing – for example, using fake websites that look identical to banks’ online systems, or text messages that look like they’re from someone’s bank.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Insurance
                    </h4>
                  <p className="m-0 text-sm">
                    There are certain types of insurance many people need to have – like car insurance and buildings insurance. But other insurance policies are matters of choice – like private medical or dental insurance. We receive complaints from consumers about a range of insurance products. We listen impartially to both you and the business when deciding what’s fair and reasonable in the circumstances
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Mortgages
                    </h4>
                  <p className="m-0 text-sm">
                    An early repayment charge is a fee to your mortgage lender, which you might be asked to pay if you want to reduce the amount you've borrowed, perhaps by paying off a lump sum. If you’ve got a mortgage with a fixed, capped or discounted interest rate product, your lender might apply an early repayment charge if you do this during the term of the special rate product. However, the charging period might sometimes run beyond that point.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Investments
                    </h4>
                  <p className="m-0 text-sm">
                  A lot of complaints we see involving ISAs happen because consumers try to make an investment or deposit cash towards the end of a tax year or top up their ISA during the tax year. If the financial business couldn't carry out their instructions in time, or did something wrong, this may mean that the consumer couldn't use their ISA allowance (or part of it) for that tax year and lost out. 
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Other complaints
                    </h4>
                  <p className="m-0 text-sm">
                    Other complains include Covid-19(coronavirus), Power of attorney and complaints that involve economic and domestic abuse.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;