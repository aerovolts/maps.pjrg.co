from flask import Flask, render_template

app = Flask(__name__)

author = 'Patrick Guelcher'
year = '2016'

@app.route('/')
def home():
    title = 'Maps Index | Patrick Guelcher'
    description = 'The central index of web mapping projects created by Patrick Guelcher.'
    return render_template('pages/index.html', author=author, year=year, title=title, description=description)

@app.route('/2016-election')
def election_2016():
    title = '2016 U.S. Election Results | Patrick Guelcher'
    description = 'An index of all mapping projects focused on the 2016 U.S. Presidential Elections.'
    return render_template('pages/2016-election.html', author=author, year=year, title=title, description=description)

@app.route('/2016-election/republican-primaries')
def republican_primaries_2016():
    title = 'Republican Primary Results | 2016 U.S. Presidential Electon'
    description = 'A web map displaying the results of the 2016 U.S. Republican Primaries prior to the 2016 U.S. General Election.'
    return render_template('pages/2016-republican-primaries.html', author=author, year=year, title=title, description=description)

@app.route('/2016-election/democratic-primaries')
def democratic_primaries_2016():
    title = 'Republican Primary Results | 2016 U.S. Presidential Electon'
    description = 'A web map displaying the results of the 2016 U.S. Democratic Primaries prior to the 2016 U.S. General Election.'
    return render_template('pages/2016-democratic-primaries.html', author=author, year=year, title=title, description=description)

if __name__ == '__main__':
    app.run()
