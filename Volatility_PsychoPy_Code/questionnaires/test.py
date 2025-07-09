with open("blockend.csv") as f:
    data = f.read().replace('\t', ',')

with open("blockend.csv", "w") as f:
    f.write(data)
