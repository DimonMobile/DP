import math
import random

ERROR_PROBABILITY = 0.0

file = open('sample.txt', 'r', encoding='UTF-8')
content = file.read().lower()
file.close()

content_length = len(content)
frequency = {}

# content collecting
for ch in content:
    if not ch in frequency:
        frequency[ch] = 0
    frequency[ch] += 1
average_frequency = content_length / len(frequency)

out_file = open('result.csv', 'w', encoding='UTF-8')
for ch in frequency:
    if ch == '\n':
        continue
    out_file.write(f'{ch}, {frequency[ch]} \n')
out_file.close()


# entropy evaluation
entropy = 0
hartly_entropy = 0
for freq in frequency:
    probability = frequency[freq] / content_length
    hartly_probability = average_frequency / content_length
    entropy += probability * math.log(probability, 2)
    hartly_entropy += hartly_probability * math.log(hartly_probability, 2)
entropy *= -1
hartly_entropy *= -1

print('Entropy:', entropy)
print('Hartly entropy:', hartly_entropy)

# binary entropy
binary_content = ''
for ch in content:
    binary_content += format(ord(ch), 'b')

# probability processing
binary_content = list(binary_content)
percent_error_probability = int(ERROR_PROBABILITY * 100.0)
for i in range(0, len(binary_content)):
    if (random.randint(1, 100) <= percent_error_probability):
        binary_content[i] = str(1 - int(binary_content[i]))
binary_content = ''.join(binary_content)


binary_counts = [0, 0]
for ch in binary_content:
    binary_counts[int(ch)] += 1

binary_entropy = 0
for el in binary_counts:
    prob = el / sum(binary_counts)
    binary_entropy += prob * math.log(prob, 2)
binary_entropy *= -1
print(f'Binary entropy: {binary_entropy}')

f = open('task.txt', 'r', encoding='UTF-8')
invest_string = f.read()
f.close()

custom_entropy = 0
for ch in invest_string:
    probability = frequency[ch] / content_length
    custom_entropy += probability * math.log(probability, 2)
custom_entropy *= -1
print(f'Custom entropy: {custom_entropy}')