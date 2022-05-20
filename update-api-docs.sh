
# we expect the docs to be at ../verida-js/api-docs/
echo 'copying docs to ./docs/api/verida-js/'
cp -r ../verida-js/api-docs/ ./docs/api/verida-js/

# we have to clean up <internal> tags in the docs
echo 'cleaning unescaped tags'
find docs/api/verida-js -type f -name "*internal*.md" -exec sed -i ''  's/internal>/internal\\>/g' {} \;