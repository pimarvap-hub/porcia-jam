import { useState } from 'react'
import { RevealRoot } from '../hooks/useReveal'

interface GalleryItem {
  id: string
  img: string
  alt: string
  category: 'honey' | 'jam' | 'packaging' | 'process'
  title?: string
}

const galleryItems: GalleryItem[] = [
  // Honey & Jam Sticks
  { id: '1', img: '/img/honey-drip.jpg', alt: 'Стик натурального мёда', category: 'honey', title: 'Мёд в стиках' },
  { id: '2', img: '/img/jam-raspberry.jpg', alt: 'Малиновое варенье', category: 'jam', title: 'Малина' },
  { id: '3', img: '/img/jam-strawberry.jpg', alt: 'Клубничное варенье', category: 'jam', title: 'Клубника' },
  { id: '4', img: '/img/jam-currant.jpg', alt: 'Смородиновое варенье', category: 'jam', title: 'Смородина' },
  { id: '5', img: '/img/dark-stick.jpg', alt: 'Стик соевого соуса', category: 'honey', title: 'Соевый соус' },
  
  // Packaging & Display
  { id: '6', img: '/img/display-box.jpg', alt: 'Дисплей-бокс продуктов', category: 'packaging', title: 'Дисплей' },
  { id: '7', img: '/img/mix-box.jpg', alt: 'Микс-бокс с ассортиментом', category: 'packaging', title: 'Микс-бокс' },
  { id: '8', img: '/img/raspberry-box.jpg', alt: 'Бокс малинового варенья', category: 'packaging', title: 'Упаковка' },
  { id: '9', img: '/img/raspberry-pack.jpg', alt: 'Упаковка малины', category: 'jam', title: 'Малиновые стики' },
  
  // Process & Usage
  { id: '10', img: '/img/dark-pour.jpg', alt: 'Соус поливает ролл', category: 'process', title: 'Применение' },
  { id: '11', img: '/img/dark-box.jpg', alt: 'Короб стиков соуса', category: 'packaging', title: 'B2B упаковка' },
]

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'honey', label: 'Мёд & Соус' },
  { id: 'jam', label: 'Варенье' },
  { id: 'packaging', label: 'Упаковка' },
  { id: 'process', label: 'Применение' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredItems =
    activeCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 noise overflow-hidden">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-6 mb-10" data-rv>
          <span className="font-display text-2xl text-[#f7a026]">04</span>
          <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-white/50">Галерея · Товары в действии</span>
        </div>

        <h2 className="font-display leading-[0.84] text-[15vw] md:text-[8vw] mb-8">
          <span className="rv-line" data-rv>
            <span>КАЖДЫЙ СТИК</span>
          </span>
          <span className="rv-line" data-rv>
            <span className="text-outline text-white">- ИСТОРИЯ ВКУСА</span>
          </span>
        </h2>

        <p className="text-white/60 text-base md:text-lg max-w-[56ch] mb-16" data-rv>
          От производства до стола вашего клиента. Посмотрите, как наши стики дарят радость в кофейнях,
          ресторанах и семейных кухнях.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12" data-rv>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-[12px] font-bold uppercase tracking-[0.15em] px-5 py-2 rounded-full transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#f7a026] text-[#0a0a0a]'
                  : 'border border-white/25 text-white/75 hover:border-white/50'
              }`}
              data-cursor={activeCategory === cat.id ? 'OK' : ''}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          data-rv
          style={{ ['--scale' as string]: '0.97' }}
        >
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item.img)}
              className="group relative aspect-square rounded-lg overflow-hidden bg-white/10 hover:ring-2 ring-[#f7a026] transition-all duration-300"
              data-cursor="СМОТРЕТЬ"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                {item.title && <p className="text-sm font-semibold text-white">{item.title}</p>}
                <p className="text-[10px] text-white/70">{item.alt}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <button
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            aria-label="Закрыть галерею"
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Увеличенное фото"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[#f7a026] transition-colors text-3xl leading-none"
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>
          </button>
        )}
      </RevealRoot>
    </section>
  )
}
