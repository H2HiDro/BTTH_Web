const display = document.getElementById('display');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click', event => {
    const buttonValue = event.target.innerText;

    // Nếu người dùng click vào phép tính "=" thì tính toán và hiển thị kết quả
    if (buttonValue === '=') {
        try {
            const expression = display.value;
            const result = eval(expression);
            display.value = Number(result.toFixed(2));
        } catch (error) {
            alert('Lỗi biểu thức toán học!');
            display.value = '';
        }
    }

    // Nếu người dùng click vào nút "C" thì xóa toàn bộ dữ liệu trên màn hình
    else if (buttonValue === 'C') {
        display.value = '';
    }

    // Nếu người dùng click vào nút "CE" thì xóa phần tử cuối cùng trên màn hình
    else if (buttonValue === 'CE') {
        display.value = display.value.slice(0, -1);
    }

    // Nếu người dùng click vào các phép tính cộng, trừ, nhân, chia thì thêm phép tính vào màn hình
    else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        display.value += `${buttonValue}`;
    }

    // Nếu người dùng click vào các chữ số thì hiển thị số đó trên màn hình
    else {
        display.value += buttonValue;
    }
});