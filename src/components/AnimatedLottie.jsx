import Lottie from 'lottie-react'

const bloodDropData = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 60,
  w: 280,
  h: 280,
  nm: 'bloodDrop',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Drop',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [140, 130, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [80, 80, 100], e: [94, 94, 100], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
            { t: 30, s: [94, 94, 100], e: [80, 80, 100], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
            { t: 60, s: [80, 80, 100], e: [80, 80, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: 'sh',
          nm: 'Drop Path',
          ks: {
            a: 0,
            k: {
              i: [
                [0, 0],
                [16, 22],
                [0, 0],
                [-16, -22]
              ],
              o: [
                [0, 0],
                [-16, -22],
                [0, 0],
                [16, 22]
              ],
              v: [
                [0, -88],
                [60, 10],
                [0, 82],
                [-60, 10]
              ],
              c: true
            }
          },
          ix: 2,
          mn: 'ADBE Vector Shape - Group'
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.925, 0.196, 0.196, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill'
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ]
}

const heroPulseData = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 60,
  w: 280,
  h: 280,
  nm: 'heroPulse',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Heart',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [140, 140, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [72, 72, 100], e: [88, 88, 100], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
            { t: 30, s: [88, 88, 100], e: [72, 72, 100], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
            { t: 60, s: [72, 72, 100], e: [72, 72, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: 'sh',
          nm: 'Heart Path',
          ks: {
            a: 0,
            k: {
              i: [
                [0, -30],
                [28, -28],
                [0, 24],
                [-28, -28]
              ],
              o: [
                [0, 24],
                [-28, -28],
                [0, -30],
                [28, -28]
              ],
              v: [
                [0, 28],
                [52, -10],
                [0, -68],
                [-52, -10]
              ],
              c: true
            }
          },
          ix: 2,
          mn: 'ADBE Vector Shape - Group'
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.992, 0.439, 0.576, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill'
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ]
}

const celebrationData = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 60,
  w: 300,
  h: 300,
  nm: 'celebrate',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Sparkles',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [80, 80, 100], e: [100, 100, 100], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
            { t: 30, s: [100, 100, 100], e: [80, 80, 100], i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] } },
            { t: 60, s: [80, 80, 100], e: [80, 80, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [-22, 0] },
              s: { a: 0, k: [24, 24] },
              nm: 'Ellipse Path 1',
              mn: 'ADBE Vector Shape - Ellipse'
            },
            {
              ty: 'fl',
              c: { a: 0, k: [1, 0.8, 0.2, 1] },
              o: { a: 0, k: 100 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill'
            }
          ],
          nm: 'Spark 1',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: 'ADBE Vector Group'
        },
        {
          ty: 'gr',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [22, 0] },
              s: { a: 0, k: [24, 24] },
              nm: 'Ellipse Path 1',
              mn: 'ADBE Vector Shape - Ellipse'
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.95, 0.2, 0.5, 1] },
              o: { a: 0, k: 100 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill'
            }
          ],
          nm: 'Spark 2',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: 'ADBE Vector Group'
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ]
}

const animations = {
  drop: bloodDropData,
  pulse: heroPulseData,
  celebrate: celebrationData
}

function AnimatedLottie({ variant = 'drop', className = '' }) {
  return (
    <div className={className}>
      <Lottie animationData={animations[variant] || bloodDropData} loop autoplay />
    </div>
  )
}

export default AnimatedLottie
