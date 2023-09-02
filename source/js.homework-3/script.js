function func() {
    const num = prompt("Are you over 18?");
    if (18 > +num ) {
    alert(`you entered ${num}, you are under 18!`);
    func();
} else {
    alert('you are approved!');
    }
};
func();
