from django.contrib import messages
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

from apps.teams.decorators import login_and_team_required


def landing(request):
    if request.user.is_authenticated:
        team = request.team
        if team:
            return HttpResponseRedirect(reverse('web_team:home', args=[team.slug]))
        else:
            messages.info(request, _(
                'Teams are enabled but you have no teams. '
                'Create a team below to access the rest of the dashboard.'
            ))
            return HttpResponseRedirect(reverse('teams:manage_teams'))
    else:
        return render(request, 'web/landing_page.html')


@login_and_team_required
def team_home(request, team_slug):
    assert request.team.slug == team_slug
    return render(request, 'web/app_home.html', context={
        'team': request.team,
        'active_tab': 'dashboard',
        'page_title': _('{team} Dashboard').format(team=request.team),
    })


def simulate_error(request):
    raise Exception('This is a simulated error.')


def home(request):
    return render(request, 'web/app/dashboard_home.html', context={
        'error_message': "error_message",
    })


def landing(request):
    if request.method == 'POST':
        if 'stuur-een-bericht' in request.POST:
            name = request.POST.get('name')
            email = request.POST.get('email')
            message = request.POST.get('message')
            #new_Contact = Contact(name = name, email = email, message = message, subject = 'unkown')
            #new_Contact.save()

        elif 'abonneer' in request.POST:
            email = request.POST.get('email')
            #new_Contact = Contact(subject = 'email abonnee', email = email, name = 'unkown', message = 'abonneer')
            #new_Contact.save()

    return render(request, 'web/landing_page.html')


def landing_prijzen(request):
    return render(request, 'web/landing_page_prijzen.html')


def dashboard_changelog(request):
    return render(request, 'web/app/dashboard_changelog.html')
   

def dashboard_getting_started(request):
    return render(request, 'web/app/dashboard_getting_started.html')