# Params

# **Do NOT setup a web server for this problem. Just create a .rb file and write your answers there.**

# You receive the data:
# ```ruby
require 'pry'

params = {
  username: 'chocolate',
  password: 'pudding',
  friends: ['vanilla', 'strawberry', 'caramel'],
  image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
}
p params[:username]
p params[:friends].last
params[:password].length >= 8
params[:data_sent_time] = Time.now
!!params[:image_url].match(/unsplash/)
p params
binding.pry

# ```

# **Write the code** to:
# 1. print the username to the console.
p params[:username]
# 2. print the last friend from `friends`.
p params[:friends].last
# 3. check if the password meets the requirements of at least 8 characters.
params[:password].length >= 8
# 4. add a key-value pair to `params` where key is the `data_sent_time` and the value is the current time.
params[:data_sent_time] = Time.now
# ### Extension
# Write code to check that the image is from the `unsplash` website.
!!params[:image_url].match(/unsplash/)