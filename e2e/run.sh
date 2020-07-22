#!/bin/bash

for file in e2e/*js; do
 if node ${file}; then
    echo -e "\n----------------------> 次のテストを実施します...\n"
 else
    echo -e "\nテストが異常終了しました...\nテストを中断します"
    exit 1
 fi
done

echo -e "\n全てのテストケースが正常終了しました!!"