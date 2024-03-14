const keyPiano = {
    "A": './sounds/key11.mp3',
    "Q": './sounds/key1.mp3',
    "S": './sounds/key12.mp3',
    "W": './sounds/key2.mp3',
    "D": './sounds/key13.mp3',
    "F": './sounds/key14.mp3',
    "G": './sounds/key15.mp3',
    "E": './sounds/key3.mp3',
    "H": './sounds/key16.mp3',
    "R": './sounds/key4.mp3',
    "J": './sounds/key17.mp3',
    "T": './sounds/key5.mp3',
    "K": './sounds/key18.mp3',
    "Y": './sounds/key6.mp3',
    "L": './sounds/key19.mp3',
    "Ñ": './sounds/key20.mp3',
    "Z": './sounds/key21.mp3',
    "U": './sounds/key7.mp3',
    "X": './sounds/key22.mp3',
    "I": './sounds/key8.mp3',
    "N": './sounds/key23.mp3',
    "O": './sounds/key9.mp3',
    "M": './sounds/key24.mp3',
    "P": './sounds/key10.mp3',
}

const playPiano = (key) => {
    const audio = new Audio(keyPiano[key]);
    audio.play();
    const keyClick = document.querySelector(`[data-key="${key}"]`);
    if (keyClick) {
        keyClick.classList.add('active');
        setTimeout(() => {
            keyClick.classList.remove('active');
        }, 100);
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('mousedown', () => playPiano(key.dataset.key));
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if (keyPiano[key]) {
        event.preventDefault();
        playPiano(key);
    }
});

document.addEventListener('keyup', (event) => {
    const keyClick = document.querySelector(`[data-key="${event.key.toUpperCase()}"]`);
    if (keyClick) {
        keyClick.classList.remove('active');
    }
});
