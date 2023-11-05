import os
import json

image_folder_path = 'cardsProject/public/cards'

sorting_order = {
    '2': 0, '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, '8': 6, '9': 7, '10': 8,
    'jack': 9, 'queen': 10, 'king': 11, 'ace': 12, 'joker': 13
}


def custom_sort_key(card):
    card_number = card['card_number'].lower()
    card_suit = card['card_suit'].lower()
    return sorting_order.get(card_number, 999), card_suit


card_data = []

for filename in sorted(os.listdir(image_folder_path)):

    name, ext = os.path.splitext(filename)
    parts = name.split('_')

    if len(parts) >= 3:
        card_number = parts[0]
        card_suit = parts[2]

        card = {
            "card_id": len(card_data) + 1,  
            "card_img_src": os.path.join('../public/cards', filename),
            "card_name": name,
            "card_number": card_number,
            "card_suit": card_suit
        }
        card_data.append(card)
    elif len(parts) == 2 and name != '.DS_Store':
        card_number = parts[0]
        card_suit = parts[1]
        card = {
            "card_id": len(card_data) + 1, 
            "card_img_src": os.path.join('../public/cards', filename),
            "card_name": name,
            "card_number": card_number,
            "card_suit": card_suit
        }
        card_data.append(card)


# Sort the cards using the custom sorting key
card_data.sort(key=custom_sort_key)

# Renumber the card IDs starting from 1
for index, card in enumerate(card_data):
    card['card_id'] = index + 1

json_object = json.dumps(card_data, indent=4)

with open('cardsProject/public/cards.json', 'w') as json_file:
    json_file.write(json_object)

print(json_object)
