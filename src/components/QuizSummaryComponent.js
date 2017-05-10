import React from 'react';

const canvasHeight = 100;
const canvasHorizontalPadding = 10;
const canvasBarWidth = 60;
const availableDrawHeight = 90;
const correctColor = '#367c27';
const incorrectColor = '#F00';
const skippedColor = '#000';

class QuizSummaryComponent extends React.Component {

  componentDidMount() {
    var ctx = this.canvas.getContext('2d');

    this.drawBar(this.props.correct / 10, correctColor, 0, ctx);
    this.drawBar(this.props.incorrect / 10, incorrectColor, 1, ctx);
    this.drawBar(this.props.skipped / 10, skippedColor, 2, ctx);
  }

  drawBar(percentageHeight, color, spot, ctx) {
    let barHeight = availableDrawHeight * percentageHeight;
    let xloc = (canvasBarWidth * spot) + (canvasHorizontalPadding * (spot + 1));
    let yloc = canvasHeight - barHeight;

    ctx.fillStyle = color;
    ctx.fillRect(xloc, yloc, canvasBarWidth, barHeight);
  }

  render() {

    return <div className="quiz-summary-component">
      <h2>Summary</h2>

      <p className="correct" style={{ color: correctColor }}>Correct: {this.props.correct}</p>
      <p className="incorrect" style={{ color: incorrectColor }}>Incorrect: {this.props.incorrect}</p>
      <p className="skipped" style={{ color: skippedColor }}>Skipped: {this.props.skipped}</p>
      <canvas width="220" height={canvasHeight} ref={(dom) => { this.canvas = dom; }}></canvas>

    </div>
  }

}

module.exports = QuizSummaryComponent;
