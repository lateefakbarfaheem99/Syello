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
  private width: number;
  private height: number;
  private step: number;
  private opacity: number;
  private rotatingStatus: RotatingStatus;
  private targetDeg: number;
  private accelerate: number;
  private opacityStep: number;
  private curTargetIndex: number;
  private readonly originalOpacity = 0.5;

  public constructor(props: Props) {
    super(props);
    this.state = {
      degree: 0,
      imageProps: []
    };
    this.width = 1000;
    this.height = 1000;
    this.step = -0.8;
    this.opacity = 0.5;
    this.opacityStep = 0.1;
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
      let { imageProps } = this.state;
      imageProps[this.curTargetIndex].opacity = this.opacity;
      this.setState({ imageProps: imageProps });
    }
    if (degree > 360) degree = 0;
    if (degree < 0) degree = 360;
    this.setState({ degree: degree });
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
  }

  private onLeave() {
    this.rotatingStatus = RotatingStatus.Aimless;
    this.step = -1;
    this.opacity = 0.5;
    let { imageProps } = this.state;
    imageProps[this.curTargetIndex].opacity = this.opacity;
    this.setState({ imageProps: imageProps });
  }

  componentDidMount() {
    let w: number = this.width;
    w = 500;
    let sw: number = 100;
    this.setState({
      degree: 0,
      imageProps: [
        { href: digitalWallet, x: w / 2 - sw / 2, y: 0, opacity: 0.5 },
        { href: addressBook, x: 0, y: w / 2 - sw / 2, opacity: 0.5 },
        {
          href: connectedApplication,
          x: w / 2 - sw / 2,
          y: w - sw,
          opacity: 0.5
        },
        { href: communications, x: w - sw, y: w / 2 - sw / 2, opacity: 0.5 }
      ]
    });
    this.timerID = setInterval(() => this.tick(), 30);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  public render() {
    const { imageProps } = this.state;
    const w: number = this.width / 2;
    const sw: number = 100;
    return (
      <div className="CommunicationArea">
        <div className="carousel">
          <svg width={this.width} height={this.height} className="svg_content">
            <svg x="250" y="0" width={w} height={w}>
              <image width={w} height={w} href={background_circle}>
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from={`0 ${w / 2}  ${w / 2}`}
                  to={`360 ${w / 2}  ${w / 2}`}
                  dur="10s"
                  repeatCount="indefinite"
                />
              </image>
              <image width={w} height={w} href={stable} className="stable" />
              <g
                width={w}
                height={w}
                transform={`rotate( ${this.state.degree} ${w / 2} ${w / 2} )`}
              >
                {imageProps.map((prop, index) => {
                  return (
                    <image
                      key={index}
                      href={prop.href}
                      x={prop.x}
                      y={prop.y}
                      opacity={prop.opacity}
                      width={sw}
                      height={sw}
                    />
                  );
                })}
              </g>
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
