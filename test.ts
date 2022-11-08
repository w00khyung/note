/**
 * 🎯 프로그래밍 요구 사항
 * 1. Random 값 추출은 MissionsUtils 라이브러리 사용 => Random.pickNumberInRange()
 * 2. 입출력은 MissonsUtils 라이브러리 => Console.readline, Console.print 활용
 * 3. indent 2칸 (prettier)
 * 4. 함수는 한 가지 일만 하도록
 * 5. 프로그램 종료 시 process.exit() 금지
 * 6. JavaScript 코드 컨벤션 (https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)
 * 7. package.json 변경 금지
 *
 */

const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer = null;
    this.strToArr = function (str) {
      return str.split('');
    };
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  // 랜덤한 숫자(정답) 생성 ✅
  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNumber)) {
        computer.push(randomNumber);
      }
    }
    this.answer = computer.join('');
    // console.log('answer', this.answer);
  }

  // 유저 입력 받기 ✅
  initUserInputInterface() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.validateInput(input);
      this.compareUserInputAndComputer(input);
    });
  }

  // 사용자가 잘못된 값을 입력한 경우 -> throw Error -> 애플리케이션 종료 ✅
  validateInput(input) {
    // 1. 3자리 숫자가 아닐 경우 ✅
    if (input.length !== 3) {
      throw '올바른 입력 값이 아닙니다. 3자리 숫자가 아닙니다. 게임을 종료합니다.';
    }

    // 2. 같은 숫자가 있을 경우 ✅
    // 명시적으로 변경?
    const set = new Set(this.strToArr(input));
    if (input.length !== set.size) {
      throw '올바른 입력 값이 아닙니다. 중복된 숫자가 존재합니다. 게임을 종료합니다.';
    }

    // 3. 입력값이 숫자가 아닐 경우
  }

  // 유저의 입력 값과 정답 비교
  compareUserInputAndComputer(input) {
    // 1. 3개의 숫자를 모두 맞힐 경우 ✅
    if (this.answer === input) {
      return this.printRestartPhrase();
    }

    // 2. 입력한 수에 대한 결과를 볼, 스트라이트 개수로 표시 ✅
    // 3. 하나도 없는 경우 ✅
    let strike = 0;
    let ball = 0;

    // else if 제거하기
    // 변수명 바꾸기
    this.strToArr(input).forEach((element, index) => {
      if (element === this.answer[index]) {
        strike++;
      }
      if (element !== this.answer[index] && this.answer.includes(element)) {
        ball++;
      }
    });

    // else if 제거하기
    let result = '';
    if (!strike && !ball) {
      result = '낫싱';
    }
    if (ball) {
      result += `${ball}볼 `;
    }
    if (strike) {
      result += `${strike}스트라이크`;
    }

    Console.print(result);
    return this.initUserInputInterface();
  }

  printRestartPhrase() {
    this.printAnswerPhrase();
    Console.readLine('', (input) => {
      if (input === '1') {
        this.startGame();
        return;
      }

      if (input === '2') {
        return;
      }

      Console.print('올바른 숫자가 아닙니다.');
    });
  }

  printAnswerPhrase() {
    Console.print('3스트라이크');
    Console.print('3개의 숫자롤 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }

  startGame() {
    this.generateRandomNumber();
    this.initUserInputInterface();
  }
}

// 수정 ❌
const app = new App();
app.play();

module.exports = App;
