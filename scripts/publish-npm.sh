#!/bin/bash


# if [ $# -lt 1 ];then
# echo 'Your should input your version numver'
# exit
# fi
version=`npm version patch`
cp -r README.md ./lib
git tag $version
npm publish --access public --verbose
git push --tag
