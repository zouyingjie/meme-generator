import React, {useState, useRef} from 'react';
import html2canvas from 'html2canvas';
import {motion} from 'framer-motion';

const MemeGenerator = () => {
    const [text, setText] = useState('Wow, Such Demo');
    const [background, setBackground] = useState('doge');
    const [fontSize, setFontSize] = useState(24);
    const [color, setColor] = useState('#ffffff');
    const [positionY, setPositionY] = useState(50); // 百分比位置
    const memeRef = useRef(null);

    const backgrounds = {
        doge: 'https://i.imgur.com/lKVSp5j.jpeg',
        cat: 'https://i.imgur.com/9eADbA3.jpeg', //
        drake: 'https://i.imgur.com/TLayEGC.jpeg',
        pepe: 'https://i.imgur.com/gzT8sYw.jpeg', //
        troll: 'https://i.imgur.com/LT5V2jD.png' //
    };

    const handleDownload = () => {
        html2canvas(memeRef.current).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    return (
        <motion.div
            className="meme-generator"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="controls">
                <input
                    type="text"
                    placeholder="输入你的文字"
                    maxLength={30}
                    value={text}
                    onChange={(e) => setText(e.target.value || 'Wow, Such Demo')}
                />
                <select value={background} onChange={(e) => setBackground(e.target.value)}>
                    <option value="doge">Doge</option>
                    <option value="cat">Grumpy Cat</option>
                    <option value="drake">Drake</option>
                    <option value="pepe">Pepe</option>
                    <option value="troll">Trollface</option>
                </select>
                <div className="styles">
                    <label>
                        文字大小:
                        <input
                            type="number"
                            min="12"
                            max="48"
                            value={fontSize}
                            onChange={(e) => setFontSize(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        文字颜色:
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </label>
                    <label>
                        垂直位置 (%):
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={positionY}
                            onChange={(e) => setPositionY(Number(e.target.value))}
                        />
                    </label>
                </div>
                <button onClick={handleDownload}>下载表情包</button>
            </div>
            <div className="meme" ref={memeRef}>
                <img src={backgrounds[background]} alt="Meme"/>
                <p style={{fontSize: `${fontSize}px`, color, top: `${positionY}%`}}>{text}</p>
            </div>
        </motion.div>
    );
};

export default MemeGenerator;