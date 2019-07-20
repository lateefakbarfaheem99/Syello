import * as React from 'react';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

import './styles.scss';

import communication_bg_landscape from '../../../images/communication_bg_landscape.png';

import background_circle from '../../../images/communication/always spins to the right.png';
import stable from '../../../images/communication/stable.png';
import addressBook from '../../../images/communication/Address Book.png';
import communications from '../../../images/communication/Communications.png';
import connectedApplication from '../../../images/communication/Connected Application.png';
import digitalWallet from '../../../images/communication/Digital wallet.png';

import address_book_phone from '../../../images/communication/addressbook_phone.png';
import communication_phone from '../../../images/communication/communication_phone.png';
import connected_application_phone from '../../../images/communication/connected_application.png';
import digital_wallet_phone from '../../../images/communication/digital_wallet_phone.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBroadcastTower,
  faBezierCurve,
  faWallet,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';

enum RotatingStatus {
  Aimless,
  Targeting,
  Stopped
}

interface State {
  imageWidth: number;
  degree: number;
  imageProps: any;
}

interface Props {
  initialDegree: number;
}

function degreesToRadians(degrees: number): number {
  return (degrees / 180) * Math.PI - Math.PI / 2;
}

const radius = 100;
const size = radius * 2;

class CommunicationArea extends React.Component<any, State> {
  private timerID: any;
  private canvasWidth: number;
  private canvasHeight: number;
  private out_w: number;
  private in_w: number;
  private readonly originalImageWidth = 120;
  private step: number;
  private opacity: number;
  private rotatingStatus: RotatingStatus;
  private targetDeg: number;
  private accelerate: number;
  private opacityStep: number;
  private curTargetIndex: number;
  private readonly originalOpacity = 0.5;
  private readonly maxScale = 1.5;
  private scale: number;
  private phoneImages;
  private phoneImageOpacity = 1;

  public constructor(props: Props) {
    super(props);
    this.state = {
      imageWidth: 0,
      degree: 0,
      imageProps: [
        {
          imageWidth: this.originalImageWidth,
          degree: 0,
          imageProps: [
            {
              href: digitalWallet,
              x: 0,
              y: 0,
              opacity: 0.5,
              scale: 1
            },
            {
              href: addressBook,
              x: 0,
              y: 0,
              opacity: 0.5,
              scale: 1
            },
            {
              href: connectedApplication,
              x: 0,
              y: 0,
              opacity: 0.5,
              scale: 1
            },
            {
              href: communications,
              x: 0,
              y: 0,
              opacity: 0.5,
              scale: 1
            }
          ]
        }
      ]
    };

    this.phoneImages = [
      digital_wallet_phone,
      address_book_phone,
      connected_application_phone,
      communication_phone
    ];

    this.canvasWidth = 1000;
    this.canvasHeight = 1000;
    this.out_w = 700;
    this.step = -0.8;
    this.opacity = 0.5;
    this.opacityStep = 0.1;
    this.curTargetIndex = 0;
    this.rotatingStatus = RotatingStatus.Aimless;
  }

  private tick() {
    if (this.rotatingStatus == RotatingStatus.Stopped) return;

    let { degree } = this.state;
    degree += this.step;
    if (this.rotatingStatus == RotatingStatus.Targeting) {
      if (Math.abs(degree - this.targetDeg) < 21) {
        this.rotatingStatus = RotatingStatus.Stopped;
        degree = this.targetDeg;
        this.opacity = 1;
      }
      this.opacity += this.opacityStep;
      if (this.opacity > 1) this.opacity = 1;

      this.scale = 1.3;
      let { imageProps } = this.state;
      imageProps[this.curTargetIndex].opacity = this.opacity;
      imageProps[this.curTargetIndex].scale = this.scale;
      this.setState({ imageProps: imageProps });
      console.log(this.phoneImageOpacity);
    }
    if (degree > 360) degree = 0;
    if (degree < 0) degree = 360;
    this.setState({ degree: degree });
    this.phoneImageOpacity = this.opacity + 0.2;
  }

  private onHover(index: number) {
    this.targetDeg = index * 90;
    this.rotatingStatus = RotatingStatus.Targeting;
    const targetingStep = 20;
    this.step = targetingStep;
    this.curTargetIndex = index;
    let remainingTickCountToTarget = Math.round(
      Math.abs(this.targetDeg - this.state.degree) / targetingStep
    );
    this.opacityStep = (1 - this.originalOpacity) / remainingTickCountToTarget;
    // this.phoneImageOpacity = 0.5;
  }

  private onLeave() {
    this.rotatingStatus = RotatingStatus.Aimless;
    this.step = -1;
    this.opacity = 0.5;
    this.scale = 1;
    let { imageProps } = this.state;

    imageProps[this.curTargetIndex].opacity = this.opacity;
    imageProps[this.curTargetIndex].scale = this.scale;
    this.setState({ imageProps: imageProps });
    // this.phoneImageOpacity = 1;
  }

  componentDidMount() {
    this.in_w = this.out_w - 100;
    let offset = (this.out_w - this.in_w) / 2;
    let sw = this.originalImageWidth;
    this.setState({
      imageWidth: this.originalImageWidth,
      degree: 0,
      imageProps: [
        {
          href: digitalWallet,
          x: offset + this.in_w / 2 - sw / 2,
          y: offset + 0,
          opacity: 0.5,
          scale: 1
        },
        {
          href: addressBook,
          x: offset + 0,
          y: offset + this.in_w / 2 - sw / 2,
          opacity: 0.5,
          scale: 1
        },
        {
          href: connectedApplication,
          x: offset + this.in_w / 2 - sw / 2,
          y: offset + this.in_w - sw,
          opacity: 0.5,
          scale: 1
        },
        {
          href: communications,
          x: offset + this.in_w - sw,
          y: offset + this.in_w / 2 - sw / 2,
          opacity: 0.5,
          scale: 1
        }
      ]
    });
    this.timerID = setInterval(() => this.tick(), 30);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  public render() {
    const { imageProps } = this.state;
    const innerCircleOffset =
      this.originalImageWidth / 2 + (this.out_w - this.in_w) / 2;
    return (
      <div className="CommunicationArea">
        <div className="carousel">
          <svg viewBox="0 0 1500 700" className="svg_content">
            <svg x="400" y="0" width={`${this.out_w}`} height={`${this.out_w}`}>
              <image
                width={`${this.in_w - this.originalImageWidth}`}
                height={`${this.in_w - this.originalImageWidth}`}
                x={innerCircleOffset}
                y={innerCircleOffset}
                href={stable}
                className="stable"
              />
              <image
                width={this.in_w - this.originalImageWidth}
                height={this.in_w - this.originalImageWidth}
                x={innerCircleOffset}
                y={innerCircleOffset}
                href={background_circle}
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from={`0 ${this.out_w / 2}  ${this.out_w / 2}`}
                  to={`360 ${this.out_w / 2}  ${this.out_w / 2}`}
                  dur="10s"
                  repeatCount="indefinite"
                />
              </image>
              <g
                transform={`rotate( ${this.state.degree} ${this.out_w /
                  2} ${this.out_w / 2} )`}
              >
                {imageProps.map((prop, index) => {
                  return (
                    <image
                      key={index}
                      href={prop.href}
                      x={prop.x}
                      y={prop.y}
                      opacity={prop.opacity}
                      width={this.state.imageWidth}
                      height={this.state.imageWidth}
                      transform={`matrix(${prop.scale}, 0, 0, ${
                        prop.scale
                      }, ${prop.x - prop.scale * prop.x}, ${prop.y -
                        prop.scale * prop.y} )`}
                    />
                  );
                })}
              </g>
              <image
                // width={this.in_w - this.originalImageWidth}
                // height={this.in_w - this.originalImageWidth}
                // x={innerCircleOffset}
                // y={innerCircleOffset}
                href={this.phoneImages[this.curTargetIndex]}
                opacity={this.phoneImageOpacity}
                width="500"
                x="75"
                y="100"
                className="phone_img"
              />
            </svg>
          </svg>
        </div>
        <div className="over_img_area">
          <div className="landscape_head_text">
            <div className="top_head">
              Communication <span className="color_red">you</span> own
            </div>
            <div className="top_content">
              Finally, the peace of mind to speak and act freely online. Our
              decentralized information and communication platform means nobody
              owns you. You choose who you want to connect with. You decide how
              much of yourself you want to share.
            </div>
          </div>
          <div className="box_area">
            <div className="left">
              <div
                className="box_content"
                onMouseEnter={() => this.onHover(3)}
                onMouseLeave={() => this.onLeave()}
              >
                <div className="text text-right">
                  <div className="header">Communications</div>
                  <div className="content">
                    Confidential voice, video
                    <br /> calling and messaging.
                  </div>
                </div>
                <div className="icon_border">
                  {' '}
                  <FontAwesomeIcon
                    icon={faBroadcastTower}
                    className="communication_icon"
                  />
                </div>
              </div>
              <div
                className="box_content"
                onMouseEnter={() => this.onHover(2)}
                onMouseLeave={() => this.onLeave()}
              >
                <div className="icon_border">
                  {' '}
                  <FontAwesomeIcon
                    icon={faBezierCurve}
                    className="communication_icon"
                  />
                </div>
                <div className="text">
                  <div className="header">Connected Applications</div>
                  <div className="content">
                    Instant access to other
                    <br /> privacy-focused applications.
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div
                className="box_content text-right"
                onMouseEnter={() => this.onHover(0)}
                onMouseLeave={() => this.onLeave()}
              >
                <div className="text">
                  <div className="header">Digital Wallet</div>
                  <div className="content">
                    Securely store, send and manage
                    <br /> your digital assets and identity.{' '}
                  </div>
                </div>{' '}
                <div className="icon_border">
                  {' '}
                  <FontAwesomeIcon
                    icon={faWallet}
                    className="communication_icon"
                  />
                </div>
              </div>
              <div
                className="box_content"
                onMouseEnter={() => this.onHover(1)}
                onMouseLeave={() => this.onLeave()}
              >
                <div className="icon_border">
                  {' '}
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className="communication_icon"
                  />
                </div>

                <div className="text">
                  <div className="header">Address Book</div>
                  <div className="content">
                    Privately manage your contacts
                    <br /> without a third-party.{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommunicationArea;
