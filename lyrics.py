import random

def generate_lyrics():
    nouns = ['love', 'heart', 'night', 'dream', 'sun', 'moon', 'star']
    verbs = ['shine', 'dance', 'sing', 'fly', 'sparkle', 'twinkle']
    adjectives = ['bright', 'beautiful', 'amazing', 'eternal', 'warm', 'spicy']

    lyric = ""
    for i in range(4):
        lyric += random.choice(adjectives) + " " + random.choice(nouns) + "\n"
        lyric += random.choice(verbs) + " " + "all " + "night " + "long" + "\n\n"

    return lyric

print(generate_lyrics())
